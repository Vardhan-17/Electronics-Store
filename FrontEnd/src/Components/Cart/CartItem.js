import { useContext } from "react";
import CartContext from "../../store/CartContext";

function CartItem(props) {
  const cart = useContext(CartContext);

  function addItemHandler() {
    cart.addToCartHandler(props.id);
  }

  function deleteItemHandler() {
    cart.deleteFromCartHandler(props.id);
  }

  

  return (
    <div className="card mb-3" style={{ height: "10rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.image}
            className="img-fluid rounded-start"
            style={{ height: "9.9rem" }}
            alt=".."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-title">{props.name}</h6>
            <div className="row justify-content-around mb-5">
              <div className="col-6">Price:{props.price}</div>
              <div className="col-6">TotalPrice:{props.quantity * props.price}</div>
            </div>
            <div className="btn-group btn-group-sm d-flex w-50" role="group">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={deleteItemHandler}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-secondary">
                {props.quantity}
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={addItemHandler}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
