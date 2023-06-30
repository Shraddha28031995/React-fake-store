import { Product } from "./product";

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
}
