const getContent = async () => {
    return await global.db.collection(process.env.CL_CON).find().toArray();
};
const getContentById = async (db, id) => {
    return await db.collection(process.env.CL_CON).findOne({ id: id });
};

const createContent = async (content) => {
    const result = await global.db.collection(process.env.CL_CON).insertOne(content);
    return result.ops[0];
};

const searchContent = async (query) => {
    return await global.db.collection(process.env.CL_CON).find(query).toArray();
};

const getRecommendations = async (userId) => {
    // For demonstration purposes, we will just return the first 5 content items
    return await global.db.collection(process.env.CL_CON).find().limit(5).toArray();
};

export default {
    getContent,
    getContentById,
    createContent,
    searchContent,
    getRecommendations
};
