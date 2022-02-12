import { createStore, action } from "easy-peasy";
import products from "../assets/data/product.json";

const store = createStore({
  items: products,
  cartItems: [],
  addProduct: action((state, product) => {
    state.cartItems.push(product);
  }),
  remove: action((state, id) => {
    state.cartItems = state.cartItems.filter((cartItem, index) => index !== id);
  })
});

export default store;
