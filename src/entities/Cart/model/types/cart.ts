import { I_Product } from '@/entities/Product';

export interface I_CartItem {
    id: string;
    product: I_Product;
    quantity: number;
    price: number;
    discount: number;
    discountPrice: number;
}

export interface CartSliceState {
    items: I_CartItem[];
}

export type IAddToCartPayload = Omit<I_CartItem, 'id'>;

export interface IChangeQuantityPayload extends Pick<I_CartItem, 'id'> {
    type: 'minus' | 'plus';
}
