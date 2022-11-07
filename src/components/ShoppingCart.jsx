import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ShoppingCartItems from "./ShoppingCartItems";

const ShoppingCart = () => {
  const [showCartItem, setShowCartItem] = useState(false);

  const showCartItemHandler = () => {
    setShowCartItem(true);
  };
  return (
    <div className="shoppingCartIcon">
      <FontAwesomeIcon icon={faCartShopping} />
      <button onClick={showCartItemHandler}></button>
      {showCartItem && <ShoppingCartItems />}
    </div>
  );
};

export default ShoppingCart;
