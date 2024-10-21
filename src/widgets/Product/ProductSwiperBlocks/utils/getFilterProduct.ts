import { I_Product } from '@/entities/Product';

export function getFilterProduct(products: I_Product[], quantity: number = 10) {
    const productsDiscount: I_Product[] = [];
    const productsForMen: I_Product[] = [];
    const productsForWomen: I_Product[] = [];

    for (const product of products) {
        if (productsDiscount.length < quantity && product.discount && product.discount > 0) {
            productsDiscount.push(product);
        }
        if (productsForMen.length < quantity && product.gender === 'MALE') {
            productsForMen.push(product);
        }
        if (productsForWomen.length < quantity && product.gender === 'FEMALE') {
            productsForWomen.push(product);
        }

        if (
            productsDiscount.length >= quantity &&
            productsForMen.length >= quantity &&
            productsForWomen.length >= quantity
        ) {
            break;
        }
    }
    return { productsDiscount, productsForMen, productsForWomen };
}
