import Product from "../../components/Product";
//import products from "../../assets/data/product.json";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const Home = (props) => {
  const products = useStoreState((state) => state.items);
  const addProduct = useStoreActions((actions) => actions.addProduct);
  const cartItems = useStoreState((state) => state.cartItems);
  // const addToBasket = (e) => {
  //   console.log("test");
  // };
  return (
    <>
      <div className="basket">
        <Link to="/cart">
          <img
            alt="basket"
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
          />
          {cartItems && !cartItems.length ? "" : cartItems.length}
        </Link>
      </div>
      <div className="product-container">
        {products.map((product, index) => (
          <Product
            key={index}
            imgSrc={product.img}
            title={`${product.title} ${index + 1}`}
            description={product.description}
            price={product.price}
            onClick={() => addProduct(product)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
