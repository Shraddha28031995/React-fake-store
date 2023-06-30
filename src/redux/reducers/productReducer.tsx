import { ActionTypes } from "../actions/actionTypes";
import { Product, ProductAction } from "../types";
import { ProductState } from "../types";

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
};

const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: Array.isArray(action.payload) ? action.payload : [action.payload],
      };

    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload as Product,
      };

    default:
      return state;
  }
};

export default productReducer;
