import { BaseService } from "./generic-base-service";
import { IPrompt, PromptModel } from "../models";
import { generateResponse } from "../api/prompt.api"
import { CategoryModel, SubCategoryModel } from "../models";
import type { IPopulatedPrompt } from "../types";

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
            let query = this.model.find({ user_id: userId });
            const fieldsToPopulate = ['category_id', 'sub_category_id'];
            fieldsToPopulate.forEach(field => {
                query = query.populate(field);
            });
            const prompts = await query.exec();
            if (!prompts || prompts.length === 0) {
                return [];
            }
            return prompts;
        }
        catch (error) {
            console.error('Error fetching prompts by user ID:', error);
            throw error;
        }
    }


    async getAllPrompts(): Promise<IPrompt[]> {
        try {
            let query = this.model.find();
            const fieldsToPopulate = ['category_id', 'sub_category_id', 'user_id'];
            fieldsToPopulate.forEach(field => {
                query = query.populate(field);
            });
            const prompts = await query.exec();
            if (!prompts || prompts.length === 0) {
                return [];
            }
            return prompts;
        } catch (error) {
            console.error('Error fetching all prompts:', error);
            throw error;
        }
    }

  
}

export const promptService = new PromptService(PromptModel);