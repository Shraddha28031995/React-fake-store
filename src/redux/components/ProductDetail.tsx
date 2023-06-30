import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { fetchProducts, fetchProductById } from "../actions";
import { Product, ProductState } from "../types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import ProductComponent from "./ProductComponent";
import { useParams } from "react-router-dom";
import Header from "./Header";

const ProductDetail = () => {
  const { productId } = useParams();
  // let product = useSelector((state) => state.product);

  // const dispatch = useDispatch();
  // console.log(productId);

  const product = useSelector(
    (state: RootState) => state.products.selectedProduct
  ) as Product;
  const dispatch: ThunkDispatch<ProductState, undefined, AnyAction> =
    useDispatch();

  // const { image, title, price, category, description } = product ? product:{image:'', title:'', price:'', category:'', };

  console.log(product, productId);

  useEffect(() => {
    dispatch(fetchProductById(Number(productId)));
  }, [dispatch]);

  const handleProductClick = (productId: number) => {
    dispatch(fetchProductById(productId));
  };

  return (
    <div className="App ui grid container">
      <Header title="Product Details" />
      {product === null ? (
        <div>...Loading</div>
      ) : (
        <div className="ui segment">
          <div className="ui two column stackable center aligned grid">
            {/* <div className="ui vertical divider">AND</div> */}
            <div className="middle aligned row">
              <div className="column lp" style={{ width: "50%" }}>
                <img
                  className="ui fluid image single_img"
                  src={product.image}
                />
              </div>
              <div className="column rp" style={{ width: "50%" }}>
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>

                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
            <div >
              <div  style={{ backgroundColor: "white", borderRadius:10, borderColor: "#919EAB1F", boxShadow: "5px 6px 4px #919EAB1F" }}>
                <h2>Description</h2>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
