import { Router } from 'express';
import * as categoryController from '../controllers/category.controller';

const router = Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:name', categoryController.getCategoryByName);
router.delete('/:name', categoryController.deleteCategoryByName);

export default router;