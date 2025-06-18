const API_URL = 'http://localhost:3000/api/users';

export const signup = async (user: { name: string; phone: string }) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Signup failed');
  return res.json();
};

export const login = async (name: string, phone: string) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, name }),
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Login failed');
  return res.json();
};

export const getAllUsers = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error((await res.json()).error || 'Failed to fetch users');
  return res.json();
};
