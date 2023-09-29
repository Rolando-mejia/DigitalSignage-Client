import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './thunks'

export const userKey = 'user';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    error: '',
    loading: false,
    success: false
}


export const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.loading= false,
            state.success=false;
            state.error = ''
        },
        updateToken: (state, action) => {
            state.user.access=  action.payload ;
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.success = false;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = String(action.payload);
            state.user = null;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.user = null;
        })
        
    }
})

export const {resetAuth, updateToken} = authSlice.actions;
export default authSlice;