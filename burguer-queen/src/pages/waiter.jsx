import React, { useState, useEffect } from "react";
import "../styles/waiter.css";
import { HeaderWaiter } from "../components/Header/headerWaiter.jsx";
import { getProducts } from "../utils/petitions";
import { Menu } from "../components/Orders/menuOrder";
import { Orders } from "../components/Orders/orders";

function Waiter() {
  const [products, setProducts] = useState([]);

  const admiGetProducts = () => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    admiGetProducts();
  }, []);

  return (
    <div className="containerWaiter">
      <HeaderWaiter/>
      <section className="sectionMenu"> 
      <Menu admiGetProducts={products} />
      <Orders/>
      </section>
    </div>
  );
}

export default Waiter;
