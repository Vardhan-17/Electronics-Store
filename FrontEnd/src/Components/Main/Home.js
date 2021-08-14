import React, { useContext, useEffect, useState } from "react";
import Signin from "../Login/Signin";
import Login from "../Login/Login";
import Carousel from "./Carousel";
import ProductsList from "./ProductsList";
import Header from "../Header/Header";
import LoginContext from "../../store/LoginContext";
import CartProvider from "../../store/CartProvider";

function Home() {
  const [products, setProducts] = useState([]);
  const log = useContext(LoginContext);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setProducts(responseData);
      } catch (err) {
        console.log(err.message);
      }
    };

    loadProducts();
  }, []);

  return (
    <CartProvider>
      <Header></Header>
      {log.showSignin && <Signin />}
      {log.showLogin && <Login />}
      <Carousel></Carousel>
      <div className="m-5">
        <ProductsList products={products}></ProductsList>
      </div>
    </CartProvider>
  );
}

export default Home;
