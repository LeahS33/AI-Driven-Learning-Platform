const BASE_URL = 'http://localhost:3000/api';

export const getAllCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
};

export const getSubCategoriesByCategoryId = async (categoryId: string) => {
    const response = await fetch(`${BASE_URL}/sub-categories/${categoryId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch subcategories');
    }
    return response.json();
};

