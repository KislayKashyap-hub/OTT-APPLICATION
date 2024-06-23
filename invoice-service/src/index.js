import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';

import connectDB from './database/invoiceDb.js';
import invoiceRoutes from './routes/v1/invoiceRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB().then(db => {
    app.locals.db = db;

    app.use('/invoice', invoiceRoutes);

    app.listen(process.env.PORT, () => {
        console.log(`Invoice-service listening on port ${process.env.PORT}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database', error);
    process.exit(1);
});
