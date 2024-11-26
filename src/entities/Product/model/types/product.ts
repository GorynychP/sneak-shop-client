import { I_Comment } from '@/entities/Comment';

export type T_Gender = 'FEMALE' | 'MALE' | 'UNISEX';

export type ProductId = Brand<Id, 'ProductId'>;

export interface I_Product {
    id: ProductId;
    title: string;
    images: string[];
    gender: T_Gender;
    description: string;
    sizes: number[];
    price: number;
    rating: number;
    discount: number;
    review: I_Comment[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface I_ProductInput extends Omit<I_Product, 'id' | 'review' | 'rating' | 'sizes' | 'images'> {}
