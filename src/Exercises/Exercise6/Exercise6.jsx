// Instructions:

// Inside the ProductList component, complete the fetchProducts function to fetch the list of products from an API endpoint and update the state variable products using setProducts.
// Render multiple instances of the ProductItem component inside the ProductList component, passing the product data as props to each instance.
// Inside the ProductItem component, display the name and price of the product received as props.

import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Fetch the list of products from an API endpoint and update the state
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('<API_ENDPOINT>');
      const data = await response.json();
      // TODO: Update the products state with the fetched data
      setProducts(data);
    } catch (error) {
      // TODO: Handle error state
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      {/* TODO: Render multiple instances of the ProductItem component */}
    </div>
  );
};

const ProductItem = ({ product }) => {
  return (
    <div>
      {/* TODO: Display the name and price of the product */}
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductList;