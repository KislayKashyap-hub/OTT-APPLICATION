import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';

import connectDB from './database/streamingDb.js';
import streamingRoutes from './routes/v1/streamingRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB().then(db => {
    app.locals.db = db;

    app.use('/streaming', streamingRoutes);

    app.listen(process.env.PORT, () => {
        console.log(`Streaming-service listening on port ${process.env.PORT}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database', error);
    process.exit(1);
});
