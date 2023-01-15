import { useState, useEffect } from "react";
import CategoryCardItem from "../components/CategoryCardItem";
import Spinner from "../components/Spinner";
import ShoppingPageBackButton from "../components/ShoppingPageBackButton";

const AllCategory = () => {
  const [allCategory, setAllCategory] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAllCategory(data);
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
          <h1 className="text-center">All Products</h1>

          <div className="row">
            {allCategory?.map((shoppingItem) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <CategoryCardItem
                    key={shoppingItem.id}
                    id={shoppingItem.id}
                    image={shoppingItem.image}
                    price={shoppingItem.price}
                    title={shoppingItem.title}
                    description={shoppingItem.description}
                    rating={shoppingItem.rating}
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

export default AllCategory;
