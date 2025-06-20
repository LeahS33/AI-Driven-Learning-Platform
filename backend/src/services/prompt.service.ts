import { BaseService } from "./generic-base-service";
import { IPrompt, PromptModel } from "../models";
import { generateResponse } from "../api/prompt.api"
import { CategoryModel, SubCategoryModel } from "../models";

class PromptService extends BaseService<IPrompt> {
    async createPrompt(promptData: Partial<IPrompt>): Promise<IPrompt> {
        try {
            const [category, subCategory] = await Promise.all([
                CategoryModel.findById(promptData.category_id),
                SubCategoryModel.findById(promptData.sub_category_id)
            ]);

            if (!category || !subCategory || !promptData.prompt) {
                throw new Error('Category, subcategory and prompt are required');
            }

            return await this.create({
                ...promptData,
                response: await generateResponse({
                    prompt: promptData.prompt,
                    category: category.name,
                    subCategory: subCategory.name
                })
            });
        } catch (error) {
            console.error('Error creating prompt:', error);
            throw error;
        }
    }

    async getPromptsByUserId(userId: string): Promise<IPrompt[]> {
        try {
            const prompts = await this.model.find({ user_id: userId })

            if (!prompts || prompts.length === 0) {
                throw new Error('No prompts found for this user');
            }
            return prompts;
        } catch (error) {
            console.error('Error fetching prompts by user ID:', error);
            throw error;
        }
    }
}


export const promptService = new PromptService(PromptModel);