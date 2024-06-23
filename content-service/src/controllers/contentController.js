import contentService from "../services/contentService.js";

const getContent = async (req, res) => {
    try {
        const content = await contentService.getContent();
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getContentById = async (req, res) => {
    const id = req.params.id;

    try {
        const db = req.app.locals.db;
        const content = await contentService.getContentById(db, id);
        if (content) {
            res.json(content);
        } else {
            res.status(404).json({ message: 'Content not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createContent = async (req, res) => {
    const content = {
        id:req.body.id,
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        releaseYear: req.body.releaseYear,
        director: req.body.director,
        cast: req.body.cast,
        duration: req.body.duration,
        poster: req.body.poster,
        trailer: req.body.trailer,
        video: req.body.video,
        price: req.body.price,
        rentalPeriod: req.body.rentalPeriod,
        ratings: req.body.ratings,
        languages: req.body.languages,
        subtitles: req.body.subtitles,
        featured: req.body.featured,
        createdAt: new Date()
    };

    try {
        const result = await contentService.createContent(content);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const searchContent = async (req, res) => {
    const query = {};
    if (req.query.title) query.title = req.query.title;
    if (req.query.genre) query.genre = req.query.genre;

    try {
        const content = await contentService.searchContent(query);
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRecommendations = async (req, res) => {
    try {
        const recommendations = await contentService.getRecommendations(req.params.userId);
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getContent,
    getContentById,
    createContent,
    searchContent,
    getRecommendations
};
