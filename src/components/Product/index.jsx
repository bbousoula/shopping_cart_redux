import React from "react";
const Product = ({ imgSrc, title, description, price, onClick }) => {
  return (
    <div className="product-wrapper">
      <div className="product-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="product-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="price">{price}</div>
      </div>
      <div className="button-wrapper">
        <button onClick={onClick}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
