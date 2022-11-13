import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";

import ShoppingCartItems from "./ShoppingCartItems";

import CartContext from "../store/Cart-context";

const ShoppingCart = () => {
  const cartCtx = useContext(CartContext);

  const [showCartItem, setShowCartItem] = useState(false);

  const showCartItemHandler = () => {
    setShowCartItem(true);
  };

  const hideCartItemHandler = (data) => {
    setShowCartItem(data);
  };

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.quantity;
  }, 0);

  return (
    <div className="shoppingCartIcon">
      <button onClick={showCartItemHandler}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="badge text-bg-secondary">{numberOfCartItems}</span>
      </button>
      {showCartItem && <ShoppingCartItems />}
      {showCartItem && <ShoppingCartItems setCloseCart={hideCartItemHandler} />}
    </div>
  );
};

export default ShoppingCart;
