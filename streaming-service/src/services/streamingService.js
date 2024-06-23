const getContentById = async (db, id) => {
    return await db.collection(process.env.CL_STR).findOne({ id: id });
};

const playContent = async (db, id) => {
    const content = await db.collection(process.env.CL_STR).findOne({ id: id });
    return content ? content.video : null;
};

const stopContent = async (db, id) => {
    const content = await db.collection(process.env.CL_STR).findOne({ id: id });
    return content ? content.video : null;
};

export default {
    getContentById,
    playContent,
    stopContent
};
