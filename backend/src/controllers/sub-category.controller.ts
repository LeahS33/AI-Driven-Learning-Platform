import { Request, Response } from 'express';
import { subCategoryService } from '../services/sub-category.service';

export const createSubCategory = async (req: Request, res: Response) => {
    try {
        const category = await subCategoryService.createSubCategory(req.body);
        res.status(201).json(category);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllSubCategories = async (_req: Request, res: Response) => {
    try {
        const categories = await subCategoryService.getAll();
        res.json(categories);
    }
    catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getSubCategoriesByCategoryId = async (req: Request, res: Response) => {
    try {
        const subCategories = await subCategoryService.getSubCategoriesByCategoryId(req.params.categoryId);
        res.json(subCategories);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
}

export const deleteSubCategoryById = async (req: Request, res: Response) => {
    try {
        await subCategoryService.delete(req.params.id);
        res.status(204).send();
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
};