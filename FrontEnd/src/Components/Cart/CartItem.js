function CartItem(props) {
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
              <div class="col-6">Price:{props.price}</div>
              <div class="col-6">TotalPrice:{props.quantity * props.price}</div>
            </div>
            <div class="btn-group btn-group-sm d-flex w-50" role="group">
              <button type="button" className="btn btn-outline-danger">
                -
              </button>
              <button type="button" className="btn btn-outline-secondary">
                {props.quantity}
              </button>
              <button type="button" className="btn btn-outline-success">
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
