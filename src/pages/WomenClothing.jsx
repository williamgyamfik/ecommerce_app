import { useState, useEffect } from "react";
import CategoryCardItem from "../components/CategoryCardItem";
import Spinner from "../components/Spinner";
import ShoppingPageBackButton from "../components/ShoppingPageBackButton";

const MenClothing = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchData = () => {
    setloading(true);
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((response) => {
        setloading(false);
        return response.json();
      })
      .then((data) => {
        setShoppingItems(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(fetchData, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container pt-5">
          <ShoppingPageBackButton />
          <h1 className="text-center"> Women Clothing </h1>
          <div className="row">
            {shoppingItems?.map((shoppingItem) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={shoppingItem.id}
                >
                  <CategoryCardItem
                    id={shoppingItem.id}
                    image={shoppingItem.image}
                    price={shoppingItem.price}
                    title={shoppingItem.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MenClothing;
