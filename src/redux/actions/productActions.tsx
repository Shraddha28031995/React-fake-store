import { ActionTypes } from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";
import { Product } from "../types";
import { SetProductsAction, SelectedProductAction } from "./index";

export const setProducts = (products: Product[]): SetProductsAction => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product: Product): SelectedProductAction => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});

export const fetchProducts = () => {
  return async (dispatch: Dispatch<SetProductsAction>) => {
    try {
      const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
};

export const fetchProductById = (id: undefined|number) => {
  return async (dispatch: Dispatch<SelectedProductAction>) => {
    try {
      const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };
};
