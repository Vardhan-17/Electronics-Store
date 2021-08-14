import { useContext } from "react";
import CartContext from "../../store/CartContext";
import LoginContext from "../../store/LoginContext";
import "../UI/CartIcon.css";

function Product(props) {
  const log = useContext(LoginContext);
  const cart = useContext(CartContext);

  function cartHandler() {
    cart.addToCartHandler(props.id);
  }

  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img" src={props.image} alt=".." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Model: {props.model}
          </h6>
          <div className="buy d-flex justify-content-between mt-auto">
            <div className="price text-success">
              <h5 className="mt-4">{props.price}.Rs</h5>
            </div>
            <button
              className="btn btn-danger mt-auto"
              onClick={log.email ? cartHandler : log.showLoginHandler}
            >
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
