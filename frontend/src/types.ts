
export interface IUser {
    _id: string;
    name: string;
    phone: string;
    isAdmin: boolean;
}

export interface IPrompt {
    _id: string;
    user_id: string;
    category_id: string;
    sub_category_id: string;
    prompt: string;
    response: string;
    created_at: Date;
}

export interface IPrompt {
    _id: string;
    user_id: string;
    category_name: string;
    sub_category_name: string;
    prompt: string;
    response: string;
    created_at: Date;
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

export interface PromptState {
    allPrompts: IPrompt[];
    currentUserPrompts: IPrompt[];
    currentPrompt: IPrompt | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export { };