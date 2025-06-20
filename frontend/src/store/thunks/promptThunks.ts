import { createAsyncThunk } from '@reduxjs/toolkit';
import { createPrompt,getPromptById } from '../../api/promptApi';

export const createAPrompt = createAsyncThunk(
    'prompt/createPrompt',
    async ({ user_id, category_id, sub_category_id, prompt }: { user_id: string; category_id: string; sub_category_id: string; prompt: string }, { rejectWithValue }) => {
        try {
            const _prompt = await createPrompt({ user_id, category_id, sub_category_id, prompt });
            return _prompt;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to create prompt');
        }
    }
);

export const getPromptWithId = createAsyncThunk(
    'prompt/getPromptById',
    async (promptId: string, { rejectWithValue }) => {
        try {
            const prompt = await getPromptById(promptId);
            return prompt;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch prompt');
        }
    }
);

export const getPromptsByUserId = createAsyncThunk(
    'prompt/getPromptsByUserId',
    async (userId: string, { rejectWithValue }) => {
        try {
            const prompts = await getPromptById(userId);
            return prompts;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch prompts for user');
        }
    }
);