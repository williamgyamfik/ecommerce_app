import cartContext from "../store/Cart-context";
import { useState, useEffect } from "react";

const CartProvider = (props) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(fetchData, []);

  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContextData = {
    items: data, // insert API state here,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <cartContext.Provider value={cartContextData}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
