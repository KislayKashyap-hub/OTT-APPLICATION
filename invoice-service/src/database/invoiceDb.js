import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config';

const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const connectDB = async () => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        console.log("Connected to database:", process.env.DB_NAME);
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

export default connectDB;
