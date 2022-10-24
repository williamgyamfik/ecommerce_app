import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Jewellery = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setShoppingItems(data);
      });
  };

  useEffect(fetchData, []);

  return (
    <>
      <h1>This is a Jewellery Page</h1>

      <Link to="/">Back to Home page</Link>
    </>
  );
};

export default Jewellery;
