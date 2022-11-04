import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryCardItem from "../components/CategoryCardItem";
import Spinner from "../components/Spinner";

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
        console.log(data);
        setShoppingItems(data);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(fetchData, []);

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <button>
        <Link to="/">Back to Home page</Link>
      </button>
      <h1 className="text-center"> Electronics </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-5 d-flex flex-column container-sm">
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

export default Electronics;
