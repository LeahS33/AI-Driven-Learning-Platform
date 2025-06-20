import { promptService } from "../services/prompt.service";
import { Request, Response } from 'express';

export const createPrompt = async (req: Request, res: Response) => {
    try {
        //console.log('Creating new prompt:', req.body);
        const prompt = await promptService.createPrompt(req.body);
        res.status(201).json({ success: true, data: prompt });
    } catch (error: any) {
        console.error('Error creating prompt:', error);
        // if (error.message.includes('OpenAI')) {
        //     return res.status(503).json({ 
        //         success: false, 
        //         error: 'AI service is temporarily unavailable. Please try again later.'
        //     });
        // }
        res.status(400).json({ success: false, error: error.message || 'Failed to create prompt' });
    }
}

export const getAllPrompts = async (_req: Request, res: Response) => {
    try {
        const prompts = await promptService.getAll();
        res.json(prompts);
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

export const getAllPromptByUsueId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const prompts = await promptService.getPromptsByUserId(userId);
        res.status(200).json({
            success: true,
            data: prompts
        });
    } catch (error: any) {
        console.error('Error fetching prompts by user ID:', error);
        res.status(404).json({
            success: false,
            error: error.message || 'Failed to fetch prompts for user'
        });
    }
};