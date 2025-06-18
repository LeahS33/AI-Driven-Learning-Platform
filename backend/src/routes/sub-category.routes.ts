import { Router } from 'express';
import * as subCategoryController from '../controllers/sub-category.controller';

const router = Router();

router.post('/', subCategoryController.createSubCategory);
router.get('/', subCategoryController.getAllSubCategories);
router.get('/:categoryId', subCategoryController.getSubCategoriesByCategoryId);
router.delete('/:id', subCategoryController.deleteSubCategoryById);

export default router;