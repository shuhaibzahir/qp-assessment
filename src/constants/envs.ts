import dotenv from 'dotenv';

dotenv.config();

export const DB_URL: string = process.env.DB_URL || "mongodb://localhost:27017/grocery";
export const PORT: number = parseInt(process.env.PORT || "3000");
