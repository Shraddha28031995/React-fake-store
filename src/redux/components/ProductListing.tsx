// import React, { useEffect } from "react";
// import ProductComponent from "./ProductComponent";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { setProducts } from "../actions/productActions"

// const ProductListing = () => {
//     const products = useSelector((state) => state);
//     const dispatch = useDispatch();

//     const fetchProducts = async (dispatch: any) => {
//         const response = await axios
//           .get<Product[]>("https://fakestoreapi.com/products")
//           .catch((err) => {
//             console.log("err", err);
//           });
//         dispatch(setProducts(response.data));
//       };
//       useEffect(() => {
//         fetchProducts();
//       }, []);
//       console.log("products:",products);

//   return (
//     <div className="ui grid container" style={{ marginTop: "10px" }}>
//     <ProductComponent />
//   </div>
//   )
// }

// export default ProductListing

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { fetchProducts, fetchProductById } from "../actions";
import { Product, ProductState } from "../types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import ProductComponent from "./ProductComponent";
import Header from "./Header";
import { Link } from "react-router-dom";

const ProductListing: React.FC = () => {
  // const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.products
  ) as Product[];
  const dispatch: ThunkDispatch<ProductState, undefined, AnyAction> =
    useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (productId: number) => {
    dispatch(fetchProductById(productId));
  };

  return (
    <div className="App">
      <Header title={"Product Listing"} />

      <div
        className="ui grid container"
        style={{
          marginTop: "10px",
          borderRadius: 10,
          borderColor: "#63738199",
          border: "1px solid #63738199",
          boxShadow: "5px 10px #888888",
          marginBottom:50
        }}
      >
        <div
          className="four wide column"
          style={{ backgroundColor: "#63738199" }}
        >
          {/* <div className="ui segment"> */}
          <div className="row">
            <div className="col-md-6">
              <h3 className="header_cell" style={{ textAlign: "left" }}>
                Title
              </h3>
            </div>
            <div className="col-md-2 header_cell">Category</div>
            <div className="col-md-2 header_cell">Price</div>
            <div className="col-md-2 header_cell">Available Count</div>
          </div>
          {/* </div> */}
        </div>
        {products.map((product: Product) => (
          <>
            <Link to={`/product/${product.id}`} style={{ cursor: "pointer", color:'black', textDecoration:'none' }}>
              <div className="four wide column" key={product.id}>
                <div
                  className=""
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="row" style={{ padding: 10 }}>
                    <div className="col-md-6">
                      <div
                        style={{ alignItems: "flex-start", display: "flex" }}
                      >
                        <img
                          src={product.image}
                          alt="product_image"
                          style={{ height: "32px", width: "32px", margin: 5 }}
                        />{" "}
                        <span style={{ textAlign: "left" }}>
                          {product.title}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-2">{product.category}</div>
                    <div className="col-md-2">{product.price}</div>
                    <div className="col-md-2">{product.rating.count}</div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
