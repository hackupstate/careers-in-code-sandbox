import React, { useState, useEffect } from "react";

function Product(props) {
  const id = props.match.params.id;
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(products => {
        let filteredProducts = products.filter(prod => prod.id === id);
        let filteredProduct =
          filteredProducts.length > 0 ? filteredProducts[0] : {};
        setProduct(filteredProduct);
      });
  }, []);

  return (
    <div
      className="product-page"
      style={{
        background: `url(${product.image})`
      }}
    >
      <div className="product-info">
        <h4>{product.name}</h4>
        <p>Product ID: {product.id}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
}

export default Product;
