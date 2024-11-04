export const discountPrice = (price: number, discount: number) => {
    if (!discount || discount === 0) return price;
    const discountPrice = price - (price * (discount || 0)) / 100;
    return +discountPrice.toFixed(2);
};
