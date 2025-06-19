
export interface IUser {
    _id: string;
    name: string;
    phone: string;
    isAdmin: boolean;
}

export interface UserState {
    user: { name: string, phone: string } | null;
    status: string;
    error: string | null;
}

export interface AdminState {
    users: IUser[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export { };