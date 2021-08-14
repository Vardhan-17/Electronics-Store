import { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import LoginContext from "./LoginContext";

function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const log = useContext(LoginContext);

  useEffect(() => {
    async function getCartItemsHandler() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/cart/${log.email}`
        );
        const responseData = await response.json();
        if (response.ok) {
          setItems(responseData);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (log.email) {
      getCartItemsHandler();
    }
  }, [log.email]);

  async function addToCartHandler(id) {
    console.log(id);
    try {
      const response = await fetch("http://localhost:5000/api/user/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: log.email,
          productId: id,
          quantity: 1,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error("Couldn't add to cart");
      }
      setItems(responseData);
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  function showCartHandler() {
    setShowCart(true);
  }

  function closeCartHandler() {
    setShowCart(false);
  }

  const cart = {
    items,
    addToCartHandler,
    showCart,
    showCartHandler,
    closeCartHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider;
