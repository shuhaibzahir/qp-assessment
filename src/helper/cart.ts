import CartModel, { CartDocument } from "../schema/cartSchema";
 
interface Item {
    id: string;
    qty: number;
}

interface CartItem {
    _id: string;
    name: string;
    price: number;
    description: string;
    selectedQuantity: number;
}

export const addToCart = (userId: string, items: Item[]): Promise<CartDocument> => {
    return new Promise<CartDocument>((resolve, reject) => {
        // check user has cart or not
        CartModel.findOne({ userId })
            .then(cart => {
                if (cart) {
                    // if user has cart then update cart items so here it will replace with new items
                    // [ { id:asdfasdfasdf, qty:2}] this is the for mat of items
                    cart.items = items;
                    cart.save().then(resolve).catch(reject);
                } else {
                    // if user has no cart then create new cart
                    const newCart = new CartModel({
                        userId,
                        items
                    });
                    newCart.save().then(resolve).catch(reject);
                }
            })
            .catch(reject);
    });
};

export const getCart = (userId: string): Promise<CartItem[]> => {
    return new Promise<CartItem[]>((resolve, reject) => {
        CartModel.aggregate([
            { $match: { userId } },
            { $unwind: "$items" },
            {
                $lookup: {
                    from: "groceries",
                    let: { itemId: "$items.id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", { $toObjectId: "$$itemId" }] }
                            }
                        }
                    ],
                    as: "groceries"
                }
            },
            { $unwind: "$groceries" },
            {
                $project: {
                    _id: "$groceries._id",
                    name: "$groceries.name",
                    price: "$groceries.price",
                    description: "$groceries.description",
                    selectedQuantity: "$items.qty"
                }
            }
        ])
            .then(resolve)
            .catch(reject);
    });
};
