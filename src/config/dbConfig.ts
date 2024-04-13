import mongoose from 'mongoose';

const connectDb = async (url: string): Promise<void> => {
    await mongoose.connect(url);
};

export { connectDb };
