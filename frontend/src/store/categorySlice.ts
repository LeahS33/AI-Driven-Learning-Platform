import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchSubCategoriesForCategory } from "./thunks/categoryThunk";
import type { CategoryState } from "../types";

const initialState: CategoryState = {
    categories: [],
    currentSubCategories: [],
    currentCategory: null,
    currentSubCategory: null,
    status: 'idle',
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
        setCurrentSubCategory: (state, action) => {
            state.currentSubCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch categories';
            })
            .addCase(fetchSubCategoriesForCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSubCategoriesForCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentSubCategories = action.payload;
            })
            .addCase(fetchSubCategoriesForCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch subcategories';
            });
    }
});

export const { setCurrentCategory, setCurrentSubCategory } = categorySlice.actions;
export default categorySlice.reducer;
