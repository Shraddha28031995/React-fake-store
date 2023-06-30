import { ProductState } from "../types";
import { combineReducers } from "redux";
import productReducer from "./productReducer";

export interface RootState {
  products: ProductState;
}

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;