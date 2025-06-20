
import { Router } from 'express';
import * as promptController from '../controllers/prompt.controller';

const router = Router();

router.post('/', promptController.createPrompt);
router.get('/', promptController.getAllPrompts);
router.get('/:userId', promptController.getAllPromptByUsueId);
router.delete('/:id', promptController.deletePrompt);

export default router;