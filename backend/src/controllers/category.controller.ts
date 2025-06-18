import { Request, Response } from 'express';
import { categoryService } from '../services/category.service';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getCategoryByName = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getCategoryByName(req.params.name);
    res.json(category);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const getAllCategories = async (_req: Request, res: Response) => {
    try{
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    }
    catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCategoryByName = async (req: Request, res: Response) => {
  try {
    await categoryService.deleteCategoryByName(req.params.name);
    res.status(204).send();
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};