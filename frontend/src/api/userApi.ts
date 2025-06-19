import type { IUser } from '../types';

const BASE_URL = 'http://localhost:3000/api';
const USERS_URL = `${BASE_URL}/users`;
const ADMIN_URL = `${BASE_URL}/admin`;

export const signup = async (user: { name: string; phone: string }) => {
  const res = await fetch(USERS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Signup failed');
  return res.json();
};

export const login = async (name: string, phone: string) => {
  const res = await fetch(`${USERS_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, name }),
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Login failed');
  return res.json();
};

export const getAllUsers = async () => {
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  const res = await fetch(USERS_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-id': currentUser._id // Add user ID for authentication
    },
    credentials: 'include'
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Failed to fetch users');
  return res.json();
};

export const deleteUser = async (userId: string) => {
  const res = await fetch(`${USERS_URL}/${userId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Failed to delete user');
  return res.status === 204;
};

export const giveAdminAccess = async (userId: string): Promise<IUser> => {
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  try {
    const response = await fetch(`${ADMIN_URL}/${userId}/admin`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'user-id': currentUser._id
      },
      credentials: 'include'
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      const error = await response.json();
      throw new Error(error.message || 'Failed to update admin status');
    }
    return response.json();
  } catch (error: any) {
    console.error('Admin access error:', error);
    throw error;
  }
};
