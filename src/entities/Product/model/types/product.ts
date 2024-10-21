export type T_Gender = 'FEMALE' | 'MALE' | 'UNISEX';

export interface I_Product {
    id: string;
    title: string;
    images: string[];
    gender: T_Gender;
    description: string;
    sizes?: number[];
    price: number;
    rating: number;
    discount: number;
}
