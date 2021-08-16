import React from "react";

const CartContext = React.createContext({
  items: [],
  addToCartHandler: () => {},
  deleteFromCartHandler:()=>{},
  showCart: false,
  showCartHandler: () => {},
  closeCartHandler: () => {},
});

export default CartContext;
