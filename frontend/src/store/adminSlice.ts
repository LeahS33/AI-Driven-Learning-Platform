import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { AdminState, IUser } from '../types';
import { deleteUser  as deleteUserApi, giveAdminAccess as giveAdminAccessApi ,getAllUsers } from '../api/userApi';

export const fetchUsers = createAsyncThunk(
    'admin/fetchUsers',
    async () => {
        const users = await getAllUsers();
        return users;
    }
);

export const giveAdminAccess = createAsyncThunk<IUser, string>(
    'admin/giveAdminAccess',
    async (userId: string) => {
        const response = await giveAdminAccessApi(userId);
        return response;
    }
);

export const deleteUser = createAsyncThunk<void, string>(
    'admin/deleteUser',
    async (userId: string) => {
        await deleteUserApi(userId);
    }
);

const initialState: AdminState = {
    users: [],
    status: "idle",
    error: null
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'An error occurred';
            });
    }
});

export default adminSlice.reducer;