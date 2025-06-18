import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../api/userApi";

export const loginUser = createAsyncThunk(
    "user/login",
    async ({ name, phone }: { name: string; phone: string }) => {
        const user = await login(name, phone);
        return user;
    }
);

export const SignupUser = createAsyncThunk(
    "user/",
    async ({ name, phone }: { name: string; phone: string }) => {
        const user = await signup({name, phone});
        return user;
    }
);

type UserState = {
    user: { name: string, Phone: string } |null; 
    status: string;
    error: string | null;
};

const initialState: UserState = { 
    user: null,
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