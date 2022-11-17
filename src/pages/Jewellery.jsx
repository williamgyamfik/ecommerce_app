import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryCardItem from "../components/CategoryCardItem";
import Spinner from "../components/Spinner";
import ShoppingPageBackButton from "../components/ShoppingPageBackButton";

const Jewellery = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        setShoppingItems(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(fetchData, []);

  return (
    <>
      <h1 className="text-center"> Jewellery </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container pt-5">
          <ShoppingPageBackButton />
          <div className="row row-cols-3 ">
            {shoppingItems?.map((shoppingItem) => {
              return (
                <CategoryCardItem
                  key={shoppingItem.id}
                  id={shoppingItem.id}
                  image={shoppingItem.image}
                  price={shoppingItem.price}
                  title={shoppingItem.title}
                  description={shoppingItem.description}
                  rating={shoppingItem.rating}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Jewellery;
