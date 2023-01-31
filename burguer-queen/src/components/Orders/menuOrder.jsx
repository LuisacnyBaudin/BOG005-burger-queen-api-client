import React, { useState } from "react";
import Card from 'react-bootstrap/Card';


function Menu({ admiGetProducts }) {
  const [showProducts, setShowProducts] = useState(admiGetProducts);

  const filterMenu = (filter) => {
    const listFilter = admiGetProducts.filter(
      (product) => product.type == filter
    );
    setShowProducts(listFilter);
    return listFilter;
  };

  return (
    <>
      <section className="btnSectionFilter">
        <button className="btnBreakfast" onClick={() => filterMenu("Desayuno")}>
          Desayuno
        </button>
        <button className="btnLunch" onClick={() => filterMenu("Almuerzo")}>
          Almuerzo
        </button>
      </section>
      <Card className="menu">
      <Card.Title className="titleMenu"> Menú </Card.Title>
      <Card.Body>
      {showProducts.map((product) => (
          <article key={product.id}>
            <p>
              {product.name} <span>${product.price}</span>
            </p>
          </article>
        ))}

      </Card.Body>
    </Card>
    </>
  );
}

export { Menu };


