import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {signup, login} from '../../dummy-api/auth-api';

const INITIAL_STATE = {
    authenticated: false,
    token: null,
    authError: null
}

export const userLogin = createAsyncThunk(
    'auth/userLogin', 
    ({email, password}) => {
        return login(email, password)
            .then(data => data.token)
            .catch(data => {throw data});
    }
)

export const userSignUp = createAsyncThunk('auth/userSignUp', 
    ({email, password}) => {
        return signup(email, password)
            .then(data => data.token)
            .catch(data => {throw data});
})

const authSlice = createSlice({
    initialState: INITIAL_STATE,
    name: 'auth',
    reducers: {
        userLogout: (state) => {
            state.authenticated = false;
            state.token = null;
            state.authError = null;
        },
        clearError: (state) => {
            state.authError = null;
        },
        userLoggedIn: (state, action) => {
            state.authError = null;
            state.authenticated = true;
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.authenticated = true;
            state.token = action.payload;
            state.authError = null;
        });

        builder.addCase(userLogin.pending, (state, action) => {
            state.authenticated = false;
            state.token = null;
            state.authError = null;
        });

        builder.addCase(userLogin.rejected, (state, action) => {
            state.authenticated = false;
            state.token = null;
            state.authError = action?.error?.message;
        });

        builder.addCase(userSignUp.fulfilled, (state, action) => {
            state.authenticated = true;
            state.token = action.payload;
            state.authError = null;
        });

        builder.addCase(userSignUp.pending, (state, action) => {
            state.authenticated = false;
            state.token = null;
            state.authError = null;
        });

        builder.addCase(userSignUp.rejected, (state, action) => {
            state.authenticated = false;
            state.token = null;
            state.authError = action?.error?.message;
        });
    }
})

export const { userLogout, clearError, userLoggedIn } = authSlice.actions

export default authSlice.reducer;