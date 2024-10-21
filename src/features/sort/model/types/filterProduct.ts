import { T_Gender } from '@/entities/Product';

export interface I_FiltersProduct {
    skip?: number;
    take?: number;
    gender?: T_Gender;
    sortBy?: 'price' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
    priceFrom?: number;
    priceTo?: number;
    searchTerm?: string;
    page?: number;
}
