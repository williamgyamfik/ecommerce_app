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
      {shoppingItems?.map((shoppingItem) => {
        return (
          <div className="container text-center" key={shoppingItem.id}>
            <div className="row">
              <div className="col">
                <p>{shoppingItem.image}</p>
              </div>
              <div className="col">
                <p>{`${"$"} ${shoppingItem.price}`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Electronics;
