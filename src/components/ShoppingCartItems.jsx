import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const ShoppingCartItems = (props) => {
  const [closeCart, setCloseCart] = useState(true);

  const closeCartHandler = () => {
    props.setCloseCart(false);
  };

  return (
    <div className="d-flex flex-column shadow-lg shoppingCart">
      <h2 className="text-center" style={{ color: "#1A2238" }}>
        Shopping Cart
      </h2>
      <button className="shoppingCartCloseButton" onClick={closeCartHandler}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <div className="basketContent">
        <div className="basketCard">
          <div className="basketCardImageContainer">
            <img src="" className="basketCardImage" alt="IMAGE HERE" />
          </div>
          <div className="basketCardDetailsContainer">
            <p className="basketCardTitle">title</p>
            <p className="basketCardPrice">Price</p>
          </div>
          <div className="basketCardDeleteContainer">
            <button className="basketCardDeleteIcon">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItems;
