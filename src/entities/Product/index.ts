//ui

export { ProductsTable } from './ui/ProductsTable/ProductsTable';
export { ProductCard } from './ui/ProductCard/ProductCard';

//types
export type { I_Product, T_Gender, ProductId } from './model/types/product';

// api
export { sneakersData } from './api/sneakersData';
export { productService } from './services/product.service';

// hooks
export { useProducts } from './lib/hooks/useProducts';
export { useOneProduct } from './lib/hooks/useOneProduct';
