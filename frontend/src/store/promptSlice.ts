import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IPrompt, PromptState } from '../types';
import { createAPrompt, getUserPrompts, getAllUsersPrompts } from "./thunks/promptThunks";



const initialState: PromptState = {
    allPrompts: [],
    currentUserPrompts: [],
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
            .addCase(getUserPrompts.pending, (state) => {
                state.status = 'loading';
            }).addCase(getUserPrompts.fulfilled, (state, action: PayloadAction<IPrompt[]>) => {
                state.status = 'succeeded';
                state.currentUserPrompts = action.payload;
            })
            .addCase(getUserPrompts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch user prompts';
            })
            .addCase(getAllUsersPrompts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllUsersPrompts.fulfilled, (state, action: PayloadAction<IPrompt[]>) => {
                state.status = 'succeeded';
                state.allPrompts = action.payload;
            })
            .addCase(getAllUsersPrompts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch all prompts';
            });
    }
});

export default promptSlice.reducer;