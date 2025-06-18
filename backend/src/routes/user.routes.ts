import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.post('/login', userController.loginUser);
router.delete('/:id', userController.deleteUser);

export default router;