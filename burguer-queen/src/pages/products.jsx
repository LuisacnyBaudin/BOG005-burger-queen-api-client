import React, { useState, useEffect } from "react";
import { HeaderAdmin } from "../components/Header/headerAdmin";
import TableProducts from "../components/Tables/productTable";
import { getProducts } from "../utils/petitions";
import "../styles/admin.css";


function Products() {
  const [products, setProducts] = useState([]);

  const admiGetProduct = () => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    admiGetProduct();
  }, []);

  return (

    <section className="containerAdmin">
      <HeaderAdmin />

      <TableProducts rows={products}  admiGetProduct={admiGetProduct}/>
    </section>
  );
}

export { Products };
