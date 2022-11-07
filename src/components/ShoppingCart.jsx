import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ShoppingCartItems from "./ShoppingCartItems";

const ShoppingCart = () => {
  const [showCartItem, setShowCartItem] = useState(false);

  const showCartItemHandler = () => {
    setShowCartItem(true);
  };

  const hideCarthandler = (data) => {
    setShowCartItem(data);
  };

  return (
    <div className="shoppingCartIcon">
      <button onClick={showCartItemHandler}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      {showCartItem && <ShoppingCartItems />}
      {showCartItem && <ShoppingCartItems setCloseCart={hideCarthandler} />}
    </div>
  );
};

export default ShoppingCart;
