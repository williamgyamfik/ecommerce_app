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
      {loading ? (
        <Spinner />
      ) : (
        <div className="container pt-5">
          <ShoppingPageBackButton />
          <h1 className="text-center"> Electronics </h1>
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

export default Electronics;
