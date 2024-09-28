import { I_Favorites } from '../model/types/favorites';
import sneakerIcon5 from '@/shared/assets/Sneakers/For men/5.png';
import sneakerIcon6 from '@/shared/assets/Sneakers/For men/6.png';

export const favoritesData: I_Favorites[] = [
    {
        id: '1',
        title: 'Nike Air Force 1 Gore-Tex',
        price: 80,
        discountPercentage: 15,
        discountedPrice: 100,
        image: sneakerIcon5,
    },
    {
        id: '2',
        title: 'Nike Air Force 1 Gore-Tex',
        price: 100,
        discountPercentage: 15,
        discountedPrice: 100,
        image: sneakerIcon6,
    },
    {
        id: '3',
        title: 'Nike Air Force 1 Gore-Tex',
        price: 120,
        discountPercentage: 15,
        discountedPrice: 100,
        image: sneakerIcon6,
    },
    {
        id: '4',
        title: 'Nike Air Force 1 Gore-Tex',
        price: 220,
        discountPercentage: 15,
        discountedPrice: 100,
        image: sneakerIcon5,
    },
];
