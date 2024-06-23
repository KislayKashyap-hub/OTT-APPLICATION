import streamingService from '../services/streamingService.js';

const getContentById = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const { id } = req.params;
        const content = await streamingService.getContentById(db, id);
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const playContent = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const { id } = req.params;
        const videoUrl = await streamingService.playContent(db, id);
        if (videoUrl) {
            res.json({ message: "Playing content", videoUrl });
        } else {
            res.status(404).json({ message: "Content not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const stopContent = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const { id } = req.params;
        const videoUrl = await streamingService.stopContent(db, id);
        if (videoUrl) {
            res.json({ message: "Stopped content", videoUrl });
        } else {
            res.status(404).json({ message: "Content not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getContentById,
    playContent,
    stopContent
};
