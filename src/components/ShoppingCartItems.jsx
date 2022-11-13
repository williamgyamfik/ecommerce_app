import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CartContext from "../store/Cart-context";
import { useContext } from "react";

import BasketCard from "./BasketCard";

const ShoppingCartItems = (props) => {
  const closeCartHandler = () => {
    props.setCloseCart(false);
  };

  const cartCtx = useContext(CartContext);

  return (
    <div className="d-flex flex-column shadow-lg shoppingCart">
      <h2 className="text-center pt-5" style={{ color: "#1A2238" }}>
        SHOPPING CART
      </h2>
      <button
        className="shoppingCartCloseButton"
        onClick={closeCartHandler}
        style={{ background: "red", color: "white" }}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>

      <div className="basketContent">
        {cartCtx.items.map((item) => {
          return (
            <BasketCard
              key={item.id}
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              image={item.image}
              totalAmount={item.totalAmount}
            />
          );
        })}
      </div>

      <div className="contentSummary">
        <div className="d-flex justify-content-evenly mb-3">
          <p>Total :</p>
        </div>
        <div className="text-center">
          <button className="btn btn-success pt-2">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItems;
