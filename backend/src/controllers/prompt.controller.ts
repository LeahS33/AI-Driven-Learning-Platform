import { Console } from "console";
import { promptService } from "../services/prompt.service";
import { Request, Response } from 'express';
import type { TransformedPrompt, IPopulatedPrompt } from "../types";

export const createPrompt = async (req: Request, res: Response) => {
    try {
        const prompt = await promptService.createPrompt(req.body);
        res.status(201).json({ success: true, data: prompt });
    } catch (error: any) {
        console.error('Error creating prompt:', error);
        res.status(400).json({ success: false, error: error.message || 'Failed to create prompt' });
    }
}

export const getAllPrompts = async (_req: Request, res: Response) => {
    try {
        const prompts = await promptService.getAllPrompts();
        const transformedPrompts = prompts.map(prompt => {
            const promptObj = prompt.toObject() as unknown as IPopulatedPrompt;    
            return {
                _id: promptObj._id,
                prompt: promptObj.prompt,
                response: promptObj.response,
                created_at: promptObj.created_at,
                user_id: typeof promptObj.user_id === 'object' && promptObj.user_id?._id
                    ? promptObj.user_id._id.toString()
                    : promptObj.user_id?.toString?.() || '',
                user_name: promptObj.user_id?.name || 'N/A',
                category_name: promptObj.category_id?.name || 'N/A',
                sub_category_name: promptObj.sub_category_id?.name || 'N/A'
            } as TransformedPrompt;
        });
        res.status(200).json({
            success: true,
            data: transformedPrompts
        });
    } catch (error: any) {
        console.error('Error fetching prompts:', error);
        res.status(500).json({ error: error.message || 'Failed to fetch prompts' });
    }
};

export const deletePrompt = async (req: Request, res: Response) => {
    try {
        await promptService.delete(req.params.id);
        res.status(204).send();
    } catch (error: any) {
        console.error('Error deleting prompt:', error);
        res.status(404).json({ error: error.message || 'Prompt not found' });
    }
};

export const getAllPromptByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const prompts = await promptService.getPromptsByUserId(userId);
         const transformedPrompts = prompts.map(prompt => {
            const promptObj = prompt.toObject();
            return {
                _id: promptObj._id,
                prompt: promptObj.prompt,
                response: promptObj.response,
                created_at: promptObj.created_at,
                user_id: promptObj.user_id,
                category_name: promptObj.category_id?.name || 'N/A',
                sub_category_name: promptObj.sub_category_id?.name || 'N/A'
            };
        });
        res.status(200).json({
            success: true,
            data: transformedPrompts
        });
    } catch (error: any) {
        console.error('Error fetching prompts by user ID:', error);
        res.status(404).json({
            success: false,
            error: error.message || 'Failed to fetch prompts for user'
        });
    }
};

// export const getPromptById = async (req: Request, res: Response) => {
//     try {
//         const promptId = req.params.id;
//         const prompt = await promptService.getById(promptId, ['category_id', 'sub_category_id'])
//         if (!prompt) {
//             res.status(404).json({ success: false, error: 'Prompt not found' });
//         }
//         const populatedPrompt = {
//             ...prompt.toObject(),
//             category_id: (prompt.category_id as any).name,
//             sub_category_id: (prompt.sub_category_id as any).name
//         };
//         res.status(200).json({ success: true, data: populatedPrompt });
//     } catch (error: any) {
//         console.error('Error fetching prompt by ID:', error);
//         res.status(500).json({ success: false, error: error.message || 'Failed to fetch prompt' });
//     }
// };