import express from "express";
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";

import contentRoute from "./routes/v1/contentRoutes.js";
import contentDb from "./database/contentDb.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/content', contentRoute);

app.get('/', (req, res) => {
    res.send("Content-services.. via GET");
});

// Connect to database and start server
contentDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Content-service listening on ", process.env.PORT);
    });
}).catch(err => {
    console.error("Failed to start server:", err);
});
