import { Product } from "../types";

export enum ActionTypes {
  SET_PRODUCTS = "SET_PRODUCTS",
  SELECTED_PRODUCT = "SELECTED_PRODUCT",
}

export interface SetProductsAction {
  type: string;
  payload: Product[];
}

export interface SelectedProductAction {
  type: string;
  payload: Product;
}

export type ProductAction = SetProductsAction | SelectedProductAction;
