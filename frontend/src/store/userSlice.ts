import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../api/userApi";
import type { UserState } from '../types';

const savedUser = localStorage.getItem('user');

export const loginUser = createAsyncThunk(
    "user/login",
    async ({ name, phone }: { name: string; phone: string }) => {
        const user = await login(name, phone);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
);

export const SignupUser = createAsyncThunk(
    "user/",
    async ({ name, phone }: { name: string; phone: string }) => {
        const user = await signup({ name, phone });
        return user;
    }
);

const initialState: UserState = {
    user: savedUser ? JSON.parse(savedUser) : null,
    status: "idle",
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

export default userSlice.reducer;