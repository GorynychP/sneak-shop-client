import { T_Gender } from '@/entities/Product';

export interface I_FiltersProduct {
    skip?: number;
    take?: number;
    gender?: T_Gender;
    sortBy?: 'price' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
    priceFrom?: number;
    priceTo?: number;
    isSale?: boolean;
    searchTerm?: string;
    page?: number;
    sizes?: string;
    // sizes?: number[];
}

export interface I_PopularProduct {
    isRating?: boolean;
}
