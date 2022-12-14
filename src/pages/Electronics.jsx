import { useEffect, useState } from "react";
import CategoryCardItem from "../components/CategoryCardItem";
import Spinner from "../components/Spinner";
import ShoppingPageBackButton from "../components/ShoppingPageBackButton";

const Electronics = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        setShoppingItems(data);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(fetchData, []);

  return (
    <>
      <h1 className="text-center"> Electronics </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container pt-5">
          <ShoppingPageBackButton />
          <div className="row row-cols-3">
            {shoppingItems?.map((shoppingItem) => {
              return (
                <CategoryCardItem
                  key={shoppingItem.id}
                  id={shoppingItem.id}
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

export default Electronics;
