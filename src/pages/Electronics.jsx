import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Electronics = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
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
      <h1>This is a Electronics Page</h1>

      <Link to="/">Back to Home page</Link>
    </>
  );
};

export default Electronics;
