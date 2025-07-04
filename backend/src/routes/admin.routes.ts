import { Router } from 'express';
import { isAdmin } from '../middlewares/admin.middleware';
import * as userController from '../controllers/user.controller';


const adminRouter = Router();


adminRouter.patch('/:userId/admin', userController.giveAdminAccess);

adminRouter.use(isAdmin);
adminRouter.get('/', userController.getAllUsers);


export default adminRouter;