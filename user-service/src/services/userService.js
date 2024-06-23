import userDb from "../database/userDb.js";
const getUsers = async () => {
    return await global.db.collection(process.env.CL_USER).find().toArray();
};

const createUser = async (user) => {
    const result = await global.db.collection(process.env.CL_USER).insertOne(user);
    return result.ops[0];
};

export default {
    getUsers,
    createUser
};
