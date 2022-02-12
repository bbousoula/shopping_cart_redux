import ItemCart from "../../components/ItemCart";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const cartItems = useStoreState((state) => state.cartItems);
  const removeProduct = useStoreActions((actions) => actions.remove);

  return cartItems && !cartItems.length ? (
    <div className="cart-main">
      basket empty <Link to="/">Home</Link>
    </div>
  ) : (
    <div className="cart-main">
      {cartItems.map((cartItem, index) => (
        <div key={index} className="cart-wrapper">
          <ItemCart
            imgSrc={cartItem.img}
            title={cartItem.title}
            description={cartItem.description}
            price={cartItem.price}
            onClick={() => removeProduct(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
