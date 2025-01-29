import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import cors from 'cors'; // Fix: Importing cors correctly

import productRoutes from './routes/product.route.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
const app = express();
app.use(express.json()); // Allows to accept json data in the req.body

// CORS middleware
app.use(cors());  // This will enable CORS for all routes

// Route for products
app.use('/api/products', productRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on http://localhost:${PORT}`);
});

app.listen(PORT, '0.0.0.0', () => {
    connectDB();
    console.log(`Server started on http://0.0.0.0:${PORT}`);
});