
export interface IUser {
    _id: string;
    name: string;
    phone: string;
    isAdmin: boolean;
}

export interface IPrompt {
    _id: string;
    user_id: string;
    user_name?: string;
    category_id: string;
    category_name?: string;
    sub_category_id: string;
    sub_category_name?: string;
    prompt: string;
    response: string;
    created_at: Date;
}

export interface ICategory{
    _id: string,
    name: string;
}

export interface ISubCategory{
    _id: string,
    name: string;
    category_id: string;
}

export interface UserState {
    user: IUser | null;
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
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}


export interface CategoryState {
    categories: ICategory[];
    currentSubCategories: ISubCategory[];
    currentCategory: string | null;
    currentSubCategory: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export { };