import sneakerIcon1 from '@/shared/assets/Sneakers/For men/1.png';
import sneakerIcon2 from '@/shared/assets/Sneakers/For men/2.png';
import sneakerIcon3 from '@/shared/assets/Sneakers/For men/3.png';
import sneakerIcon4 from '@/shared/assets/Sneakers/For men/4.png';
// import sneakerIcon5 from '@/shared/assets/Sneakers/For men/5.png';
// import sneakerIcon6 from '@/shared/assets/Sneakers/For men/6.png';
// import sneakerIcon7 from '@/shared/assets/Sneakers/For men/7.png';
// import sneakerIcon8 from '@/shared/assets/Sneakers/For women/1.png';
// import sneakerIcon9 from '@/shared/assets/Sneakers/For women/2.png';
// import sneakerIcon10 from '@/shared/assets/Sneakers/For women/3.png';
// import sneakerIcon11 from '@/shared/assets/Sneakers/For men/10.png';
import { I_CartProduct } from '../model/types/cart';

export const productCartData: I_CartProduct[] = [
    {
        id: '1',
        title: 'Nike Pegasus',
        image: sneakerIcon1,
        size: 36,
        price: 5000, //цена за один продукт
        discountPercentage: 10, // процент скидки
        discountedPrice: 4500, // цена со скидкой
        quantity: 1, //количество одного продукта
        total: 5000, // общая цена которая не включает скидку
    },
    {
        id: '2',
        title: 'Nike Air Force 1 Gore-Tex',
        image: sneakerIcon2,
        size: 36,
        price: 5000, //цена за один продукт
        quantity: 2, //количество одного продукта
        total: 10000, // общая цена которая не включает скидку
    },
    {
        id: '3',
        title: 'Nike Air Force 1 Gore-Tex',
        image: sneakerIcon3,
        size: 36,
        price: 5000, //цена за один продукт
        discountPercentage: 10, // процент скидки
        discountedPrice: 9000, // цена со скидкой
        quantity: 2, //количество одного продукта
        total: 10000, // общая цена которая не включает скидку
    },
    {
        id: '4',
        title: 'Nike Air Force 1 Gore-Tex',
        image: sneakerIcon4,
        size: 36,
        price: 5000, //цена за один продукт
        discountPercentage: 10, // процент скидки
        discountedPrice: 9000, // цена со скидкой
        quantity: 2, //количество одного продукта
        total: 10000, // общая цена которая не включает скидку
    },
    {
        id: '5',
        title: 'Nike Air Force 1 Gore-Tex',
        image: sneakerIcon4,
        size: 36,
        price: 5000, //цена за один продукт
        discountPercentage: 10, // процент скидки
        discountedPrice: 9000, // цена со скидкой
        quantity: 2, //количество одного продукта
        total: 10000, // общая цена которая не включает скидку
    },
];
