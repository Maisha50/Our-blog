import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

// Configure GridFsStorage with error handling
const storage = new GridFsStorage({
    url: process.env.DB,  // Use the DB connection string from the .env file
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        // Check file type
        if (match.indexOf(file.mimetype) === -1) {
            return {
                bucketName: "photos",
                filename: `${Date.now()}-blog-${file.originalname}`
            };
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

// Add error handling to check for connection or file upload errors
storage.on('connection', (db) => {
    console.log('Connected to MongoDB for file storage');
});

storage.on('connectionFailed', (err) => {
    console.error('MongoDB connection for file storage failed', err);
});

export default multer({ storage });
