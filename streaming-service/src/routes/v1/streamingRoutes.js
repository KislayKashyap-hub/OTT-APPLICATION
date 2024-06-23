import express from 'express';
import streamingController from '../../controllers/streamingController.js';

const router = express.Router();

router.get('/:id', streamingController.getContentById);
router.post('/play/:id', streamingController.playContent);
router.post('/stop/:id', streamingController.stopContent);

export default router;
