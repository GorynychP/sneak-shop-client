export interface I_CartProduct extends I_CartProductBase {
    title: string;
    price: number;
    total: number;
    discountPercentage?: number;
    discountedPrice?: number;
    image: string;
    size: number;
}

export interface I_CartProductBase {
    id: string;
    quantity: number;
}
