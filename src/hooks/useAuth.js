import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {userLogin, userSignUp, clearError, userLoggedIn, userLogout} from '../redux/slices/auth.slice'

const useAuth = () => {
  const {authenticated, token, authError} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const _token = localStorage.getItem('token');
  if(!!_token && !token) dispatch(userLoggedIn(_token));

  useEffect(() => {
    if(!!token) localStorage.setItem('token', token);
  }, [token])

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(userLogout());
  }

  const clearErrors = () => {
    dispatch(clearError());
  }

  const login = (userForm) => {
    dispatch(userLogin(userForm));
  }

  const signUp = (userForm) => {
    dispatch(userSignUp(userForm));
  }

  return { authenticated, token, authError, clearErrors, login, signUp, logout }
}

export default useAuth;