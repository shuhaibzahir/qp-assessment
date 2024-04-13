import mongoose, { Document, Model } from 'mongoose';
import { cartItem } from '../interfaces/types';

 

export interface CartDocument extends cartItem, Document {}

const CartSchema = new mongoose.Schema<CartDocument>({
    userId: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
    },
});

const CartModel: Model<CartDocument> = mongoose.model<CartDocument>('cart', CartSchema);

export default CartModel;
