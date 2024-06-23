const getInvoiceById = async (db, id) => {
    return await db.collection(process.env.CL_INV).findOne({ id: id });
};

const getAllInvoices = async (db) => {
    return await db.collection(process.env.CL_INV).find().toArray();
};

const createInvoice = async (db, invoice) => {
    const result = await db.collection(process.env.CL_INV).insertOne(invoice);
    return result.ops[0];
};

export default {
    getInvoiceById,
    getAllInvoices,
    createInvoice
};
