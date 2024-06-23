import express from 'express';
import contentController from '../../controllers/contentController.js';

const router = express.Router();

router.get('/', contentController.getContent);
router.get('/:id', contentController.getContentById);
router.post('/add', contentController.createContent);
router.get('/search', contentController.searchContent);
router.get('/recommendations/:userId', contentController.getRecommendations);

export default router;
