import React from "react";

const CartContext = React.createContext({
  items: [],
  addToCartHandler: () => {},
  showCart: false,
  showCartHandler: () => {},
  closeCartHandler: () => {},
});

export default CartContext;
