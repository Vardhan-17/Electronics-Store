import Product from "./Product";

function ProductsList(props) {
  const list = props.products.map((product) => (
    <Product
      key={product._id}
      id={product._id}
      name={product.product}
      image={product.image}
      price={product.price}
      model={product.model}
      category={product.category}
      description={product.description}
    />
  ));
  return <div className="row row-cols-1 row-cols-md-5 g-4">{list}</div>;
}

export default ProductsList;
