import OpenAI from 'openai';
import dotenv from 'dotenv';
import { CategoryModel } from '../models/category.model';
import { PromptModel } from '../models/prompt.model';
import { ObjectId } from 'mongoose';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 60000, // 60 seconds timeout
    maxRetries: 3,
});

interface PromptContext {
    prompt: string;
    category: string;
    subCategory: string;
}

export async function generateResponse({ prompt, category, subCategory }: PromptContext): Promise<string> {
    try {
        //         const contextualPrompt = `
        // Category: ${category}
        // Sub-category: ${subCategory}
        // Question/Prompt: ${prompt}`;
        console.log('Sending request to OpenAI:', {
            model: "gpt-3.5-turbo",
            prompt: prompt,
            category: category,
            subCategory: subCategory
        });
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful AI tutor assistant."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 500
        });
        if (!response.choices[0]?.message?.content) {
            throw new Error('No response generated from OpenAI');
        }
        return response.choices[0].message.content || 'No response generated';
    } catch (error: any) {
        console.error('OpenAI API Error:', {
            message: error.message,
            status: error.status,
            response: error.response?.data
        });
        if (error.status === 401) {
            throw new Error('Invalid OpenAI API key');
        }
        if (error.status === 429) {
            throw new Error('OpenAI API rate limit exceeded');
        }
        throw new Error('Failed to generate response from OpenAI');
    }
}

export async function getCatigoryName(categoryId: ObjectId) {
    const res = await CategoryModel.findById(categoryId);
    if (!res) {
        throw new Error('Category not found');
    }
    return res.name;
}

export async function getSubCatigoryName(subCategoryId: ObjectId) {
    const res = await CategoryModel.findById(subCategoryId);
    if (!res) {
        throw new Error('Category not found');
    }
    return res.name;
}
