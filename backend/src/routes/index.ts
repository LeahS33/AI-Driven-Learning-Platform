import { Router } from 'express';
import userRoutes from './user.routes';
import categoryRoutes from './category.routes';
import subCategoryRoutes from './sub-category.routes';  
import adminRoutes from './admin.routes';
import promptRoutes from './prompt.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);
router.use('/admin', adminRoutes)
router.use('/prompts', promptRoutes); 

export default router;