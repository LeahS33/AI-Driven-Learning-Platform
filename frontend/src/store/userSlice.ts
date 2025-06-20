import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from '../types';
import { loginUser, SignupUser } from "./thunks/userThunk";


const savedUser = localStorage.getItem('user');

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
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to create prompt';
            })
            .addCase(SignupUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(SignupUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
                state.error = null;
            })
            .addCase(SignupUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to create prompt';
            });
    },
});

export default userSlice.reducer;