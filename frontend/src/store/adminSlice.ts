import { createSlice } from '@reduxjs/toolkit';
import type { AdminState } from '../types';
import { fetchUsers } from './thunks/adminThunks';


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
            })
    }
});

export default adminSlice.reducer;