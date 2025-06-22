import { deleteUser  as deleteUserApi, giveAdminAccess as giveAdminAccessApi ,getAllUsers } from '../../api/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from '../../types';

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
