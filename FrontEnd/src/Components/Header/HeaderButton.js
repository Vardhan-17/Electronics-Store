import React from "react";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Cart from "../Cart/Cart";

function HeaderButton() {
  const cart = useContext(CartContext);

  

  return (
    <React.Fragment>
      {cart.showCart && <Cart></Cart>}
      <div className="px-2">
        <button
          type="button"
          className="btn btn-info"
          onClick={cart.showCartHandler}
        >
          Cart
          <i className="fas fa-shopping-cart"></i>
          <strong> {cart.items.length}</strong>
        </button>
      </div>
    </React.Fragment>
  );
}

export default HeaderButton;
