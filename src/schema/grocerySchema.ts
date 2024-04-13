import mongoose, { Document, Model } from 'mongoose';

interface Grocery {
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export interface GroceryDocument extends Grocery, Document {}

const GrocerySchema = new mongoose.Schema<GroceryDocument>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const GroceryModel: Model<GroceryDocument> = mongoose.model<GroceryDocument>('Grocery', GrocerySchema);

export default GroceryModel;
