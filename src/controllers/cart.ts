import { Request, Response } from 'express';
import * as cartHelper from '../helper/cart';
import { AuthenticatedRequest } from '../interfaces/types';

const addToCart = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.userId || "";
    const items = req.body.items;
    try {
        const result = await cartHelper.addToCart(userId, items);
        res.status(201).json({
            message: "Cart updated successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

const getCart = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.userId || "";
    try {
        const result = await cartHelper.getCart(userId);
        res.status(200).json({
            message: "Cart fetched successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

export { addToCart, getCart };
