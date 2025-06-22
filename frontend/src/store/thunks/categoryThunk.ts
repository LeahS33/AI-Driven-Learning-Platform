import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories, getSubCategoriesByCategoryId } from '../../api/caregoryApi';


export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async (_,{ rejectWithValue }) => {
        try {
            const categories = await getAllCategories();
            return categories;
        } catch (error:any) {
            console.error('Failed to fetch categories:', error);
            return rejectWithValue(error.message || 'Failed to fetch all prompts')
        }
    }
);

export const fetchSubCategoriesForCategory = createAsyncThunk(
    'category/fetchSubCategories',
    async (categoryId: string,{ rejectWithValue }) => {
        try{
        const subCategories = await getSubCategoriesByCategoryId(categoryId);
        return subCategories;
        }catch (error:any) {
            console.error('Failed to fetch subcategories:', error);
            return rejectWithValue(error.message || 'Failed to fetch subcategories');
        }
    }
);
