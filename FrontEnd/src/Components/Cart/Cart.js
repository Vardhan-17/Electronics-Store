import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

function Cart() {
  const cart = useContext(CartContext);
  let totalPrice = 0;

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function itemsList() {
      let cartItems = [];
      cart.items.forEach(async (item) => {
        await fetchItem(item, cartItems);
        setItems([...cartItems]);
      });
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

  let displayItems = items.map((item) => {
    totalPrice += item.quantity * item.price;
    return (
      <CartItem
        key={item._id}
        id={item._id}
        name={item.product}
        quantity={item.quantity}
        image={item.image}
        price={item.price}
      />
    );
  });

  return (
    <Modal onClose={cart.closeCartHandler}>
      <h3 className="text-center">Cart Items Total Price : {totalPrice}</h3>
      <div
        className="container"
        style={{ maxHeight: "35rem", overflow: "scroll" }}
      >
        {displayItems}
      </div>
    </Modal>
  );
}

export default Cart;
