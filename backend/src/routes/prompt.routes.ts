
import { Router } from 'express';
import * as promptController from '../controllers/prompt.controller';


const router = Router();

router.get('/user/:userId', promptController.getAllPromptByUserId);
router.delete('/:id', promptController.deletePrompt);
router.get('/:id', promptController.getPromptById);
router.get('/', promptController.getAllPrompts);
router.post('/', promptController.createPrompt);

export default router;