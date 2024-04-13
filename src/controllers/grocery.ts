import { Request, Response } from 'express';
import * as groceryHelper from '../helper/grocery';

const createGrocery = async (req: Request, res: Response) => {
    try {
        const result = await groceryHelper.createGrocery(req.body);
        res.status(201).json({
            message: "Grocery created successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

const updateGrocery = async (req: Request, res: Response) => {
    try {
        const result = await groceryHelper.updateGrocery(req.params.id, req.body);
        res.status(200).json({
            message: "Grocery updated successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

const getAllGrocery = async (req: Request, res: Response) => {
    try {
        const result = await groceryHelper.getAllGrocery();
        res.status(200).json({
            message: "Grocery fetched successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

const getGroceryById = async (req: Request, res: Response) => {
    try {
        const result = await groceryHelper.getGroceryById(req.params.id);
        if (!result) {
            return res.status(404).json({
                message: "Grocery not found"
            });
        }
        res.status(200).json({
            message: "Grocery fetched successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

const deleteGrocery = async (req: Request, res: Response) => {
    try {
        const result = await groceryHelper.deleteGrocery(req.params.id);
        res.status(200).json({
            message: "Grocery deleted successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

export {
    createGrocery,
    updateGrocery,
    getAllGrocery,
    getGroceryById,
    deleteGrocery
};
