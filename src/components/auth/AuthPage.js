import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import useAuth from "../../hooks/useAuth";

function AuthPage() {
  const { authError, authenticated, clearErrors, login, signUp } = useAuth();

  const [userForm, setUserForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if(!!authenticated) {
      return navigate('/user');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated])

  const handleChange = (e) => {
    if(!!authError) clearErrors()
    const { name, value } = e.target;

    setUserForm({
      ...userForm,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    login(userForm);
  }

  const handleSignUp = (e) => {
    signUp(userForm);
  }

  return (
    <section id="auth-form">
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={userForm.email} onChange={handleChange}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" minLength={6} required value={userForm.password} onChange={handleChange}/>
        </div>
        {authError && <p>{authError}</p>}
        <button className="btn" onClick={handleLogin}>
          Log In / Sign Up
        </button>
      </form>
      <button className="btn-alt" onClick={handleSignUp}>
        Create a new user / Log in
      </button>
    </section>
  );
}

export default AuthPage;
