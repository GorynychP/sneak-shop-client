//ui
export { ProductsTable } from './ui/ProductsTable/ProductsTable';
export { ProductCard } from './ui/ProductCard/ProductCard';
export { ProductEdit } from './ui/ProductEdit/ProductEdit';
// hooks
export { useProducts } from './lib/hooks/useProducts';
export { useOneProduct } from './lib/hooks/useOneProduct';
// api
export { productService } from './services/product.service';
//types
export type { I_Product, T_Gender, ProductId } from './model/types/product';
