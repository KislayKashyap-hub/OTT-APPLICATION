import express from 'express';
import invoiceController from '../../controllers/invoiceController.js';

const router = express.Router();

router.get('/search/:id', invoiceController.getInvoiceById);
router.get('/', invoiceController.getAllInvoices);
router.post('/', invoiceController.createInvoice);

export default router;
