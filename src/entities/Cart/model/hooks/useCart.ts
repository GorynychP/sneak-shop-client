import { useAppSelector } from '@/shared/model';

export const useCart = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountTotalPrice = cartItems.reduce((acc, item) => acc + item?.discountPrice * item.quantity, 0);
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const discount = () => {
        const percent = (discountTotalPrice * 100) / totalPrice;
        return 100 - Number(percent.toFixed(0));
    };

    return { cartItems, totalPrice, discountTotalPrice, discount: discount(), count };
};
