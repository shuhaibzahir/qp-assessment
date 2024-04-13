import GroceryModel, { GroceryDocument } from "../schema/grocerySchema";

interface GroceryData {
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export const createGrocery = (data: GroceryData): Promise<GroceryDocument> => {
    return new Promise<GroceryDocument>((resolve, reject) => {
        const grocery = new GroceryModel(data);
        grocery.save().then(resolve).catch(reject);
    });
};

export const getGroceryById = (id: string): Promise<GroceryDocument | null> => {
    return GroceryModel.findOne({ _id: id }).exec();
};

export const getAllGrocery = (): Promise<GroceryDocument[]> => {
    return GroceryModel.find().exec();
};

export const updateGrocery = (id: string, data: Partial<GroceryData>): Promise<GroceryDocument | null> => {
    return GroceryModel.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteGrocery = (id: string): Promise<GroceryDocument | null> => {
    return GroceryModel.findByIdAndDelete(id).exec();
};
