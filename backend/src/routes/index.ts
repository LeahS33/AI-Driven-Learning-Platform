import { Router } from 'express';
import userRoutes from './user.routes';
import categoryRoutes from './category.routes';
import subCategoryRoutes from './sub-category.routes';  

const router = Router();

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);

export default router;