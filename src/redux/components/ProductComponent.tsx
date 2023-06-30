import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { Product } from "../types";

const ProductComponent: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products) as Product[];

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`} style={{color:'red', cursor:'pointer'}}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
