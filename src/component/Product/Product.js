import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>title</p>
        <p className="product__price">
          <small>$</small>
          <strong>32.2</strong>
        </p>
        <div className="product__rating">
          <p>⭐⭐</p>
        </div>
      </div>
      <img
        alt="text"
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
