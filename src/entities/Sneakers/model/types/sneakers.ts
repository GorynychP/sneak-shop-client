export interface I_ProductSneakers {
    id: string;
    title: string;
    images: string[];
    description: string;
    sizes?: number[];
    price: number;
    rating: number;
    discount?: number;
}
