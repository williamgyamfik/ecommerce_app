import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryCardItem from "../components/CategoryCardItem";

const MenClothing = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
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
      <button>
        <Link to="/">Back to Home page</Link>
      </button>
      <h1 className="text-center"> Women Clothing </h1>
      <div className="p-5 d-flex flex-column">
        <div className="row row-cols-3 g-1">
          {shoppingItems?.map((shoppingItem) => {
            return (
              <CategoryCardItem
                key={shoppingItem.id}
                image={shoppingItem.image}
                price={shoppingItem.price}
                title={shoppingItem.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenClothing;
