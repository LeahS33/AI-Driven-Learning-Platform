import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IPrompt, PromptState } from '../types';
import { createAPrompt, getPromptWithId, getPromptsByUserId } from "./thunks/promptThunks";



const initialState: PromptState = {
    allPrompts: [],
    currentUserPrompts: [],
    currentPrompt: null,
    status: 'idle',
    error: null,
};

const promptSlice = createSlice({
    name: 'prompt',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createAPrompt.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createAPrompt.fulfilled, (state, action: PayloadAction<IPrompt>) => {
                state.status = 'succeeded';
                state.allPrompts.push(action.payload);
            })
            .addCase(createAPrompt.rejected, (state, action) => {
                state.status = 'failed';
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to create prompt';
            })
            .addCase(getPromptWithId.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPromptWithId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentPrompt = action.payload;
            })
            .addCase(getPromptWithId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch prompt';
            }).addCase(getPromptsByUserId.pending, (state) => {
                state.status = 'loading';
            }).addCase(getPromptsByUserId.fulfilled, (state, action: PayloadAction<IPrompt[]>) => {
                state.status = 'succeeded';
                state.currentUserPrompts = action.payload;
            })
            .addCase(getPromptsByUserId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch user prompts';
            });
    }
});

export default promptSlice.reducer;