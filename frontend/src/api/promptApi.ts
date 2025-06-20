
const BASE_URL = 'http://localhost:3000/api/prompts';

export const createPrompt = async (promptData: {
    user_id?: string;
    category_id: string;
    sub_category_id: string;
    prompt: string;
}) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(promptData),
    });
    if (!response.ok) throw new Error((await response.json()).error || 'Failed to create prompt');
    return response.json();
};

export const getAllPrompts = async () => {
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error((await response.json()).error || 'Failed to fetch prompts');
    return response.json();
};

export const deletePrompt = async (promptId: string) => {
    const response = await fetch(`${BASE_URL}/${promptId}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error((await response.json()).error || 'Failed to delete prompt');
    return response.status === 204;
};

export const getPromptsByUserId = async (userId: string) => {
    const response = await fetch(`${BASE_URL}/user/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error((await response.json()).error || 'Failed to fetch prompts for user');
    return response.json();
};

export const getPromptById = async (promptId: string) => {
    const response = await fetch(`${BASE_URL}/${promptId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error((await response.json()).error || 'Failed to fetch prompt');
    return response.json();
};

