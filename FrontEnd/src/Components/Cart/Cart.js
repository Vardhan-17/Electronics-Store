import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

function Cart(props) {
  const cart = useContext(CartContext);
  let totalPrice = 0;

  const displayItems = props.items.map((item) => {
    totalPrice+=item.quantity*item.price;
    return <CartItem
      key={item._id}
      name={item.product}
      quantity={item.quantity}
      image={item.image}
      price={item.price}
    />
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
