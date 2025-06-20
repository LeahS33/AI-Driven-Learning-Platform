import { login, signup } from "../../api/userApi";
import { createAsyncThunk } from '@reduxjs/toolkit';


export const loginUser = createAsyncThunk(
    "user/login",
    async ({ name, phone }: { name: string; phone: string }, { rejectWithValue }) => {
        try {
            const user = await login(name, phone);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error: any) {
            return rejectWithValue({
                message: error.message || 'Login failed',
                status: error.status || 500
            });
        }
    }
);

export const SignupUser = createAsyncThunk(
    "user/",
    async ({ name, phone }: { name: string; phone: string }, { rejectWithValue }) => {
        try {
            const user = await signup({ name, phone });
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error: any) {
            return rejectWithValue({
                message: error.message || 'Signup failed',
                status: error.status || 500
            });
        }
    }
);

