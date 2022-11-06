import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryCardItem from "../components/CategoryCardItem";
import Spinner from "../components/Spinner";
import ShoppingPageBackButton from "../components/ShoppingPageBackButton";

const MenClothing = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setShoppingItems(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(fetchData, []);

  return (
    <>
      <h1 className="text-center"> Men Clothing </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-5 d-flex flex-column container">
          <ShoppingPageBackButton />
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
      )}
    </>
  );
};

export default MenClothing;
