import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";

import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
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
    <>
      <div className="d-flex justify-content-evenly">
        <div className="px-1">
          <h1 className="fs-5">Your cart</h1>
        </div>
        <div className="px-3 mx-1 border border-3">
          <button
            style={{ background: "#1a2238", color: "white" }}
            onClick={showCartItemHandler}
          >
            <FontAwesomeIcon
              icon={faCartArrowDown}
              className="border border-3"
            />
            <span className="badge text-bg-secondary">{numberOfCartItems}</span>
          </button>
        </div>
      </div>
      {showCartItem && <ShoppingCartItems />}
      {showCartItem && <ShoppingCartItems setCloseCart={hideCartItemHandler} />}
    </>
  );
};

export default ShoppingCart;
