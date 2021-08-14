import React from "react";
import { useContext,useState,useEffect } from "react";
import CartContext from "../../store/CartContext";
import Cart from "../Cart/Cart";

function HeaderButton() {
  const cart = useContext(CartContext);

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function itemsList() {
      let cartItems = [];
      cart.items.forEach((item) => {
        fetchItem(item, cartItems);
      });

      setItems(cartItems);
    }

    itemsList();

    async function fetchItem(item, cartItems) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${item.productId}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const responseData = await response.json();
        cartItems.push({ ...responseData, quantity: item.quantity });
      } catch (err) {
        console.log(err);
      }
    }
  }, [cart.items]);

  return (
    <React.Fragment>
      {cart.showCart && <Cart items={items}></Cart>}
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
