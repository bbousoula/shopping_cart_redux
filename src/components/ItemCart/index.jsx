const ItemCart = ({ imgSrc, title, description, price, onClick }) => {
  return (
    <div className="cart-wrapper">
      <div className="remove-item">
        <button onClick={onClick}>X</button>
      </div>
      <div className="cart-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="cart-detail">
        <div className="cart-product-title">{title}</div>
        <div className="cart-product-desc">{description}</div>
      </div>
      <div className="cart-price">{price}</div>
      <div></div>
    </div>
  );
};
export default ItemCart;
