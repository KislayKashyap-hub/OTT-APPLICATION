import invoiceService from '../services/invoiceService.js';

const getInvoiceById = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const { id } = req.params;
        const invoice = await invoiceService.getInvoiceById(db, id);
        res.json(invoice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllInvoices = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const invoices = await invoiceService.getAllInvoices(db);
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createInvoice = async (req, res) => {
    const invoice = {
        id: req.body.id,
        userId: req.body.userId,
        amount: req.body.amount,
        date: req.body.date
    };

    try {
        const db = req.app.locals.db;
        const result = await invoiceService.createInvoice(db, invoice);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default {
    getInvoiceById,
    getAllInvoices,
    createInvoice
};
