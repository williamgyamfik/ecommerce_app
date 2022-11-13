import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../store/Cart-context";
import { useRef } from "react";
import { useContext } from "react";

const CategoryCardItem = (props) => {
  const quantityInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const enteredTotalQuantity = +enteredQuantity;

    cartCtx.addItem({
      id: props.id,
      price: props.price,
      title: props.title,
      image: props.image,
      quantity: enteredTotalQuantity,
      totalAmount: props.price * enteredTotalQuantity,
    });
  };

  return (
    <div className="px-2 py-2" id={props.id}>
      <div className="d-flex justify-content-center align-items-center bg-transparent h-75 w-100 g-1">
        <img
          src={props.image}
          className="g-1 bg-image hover-zoom"
          style={{ width: "270px", height: "250px" }}
        />
      </div>

      <div className="d-flex justify-content-evenly align-items-center fw-bold ">
        <p className="fs-2 text-center">{`${"$"}${props.price}`}</p>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="quantity"></label>
            <input
              id="quantity"
              type="number"
              min="1"
              max="5"
              defaultValue="1"
              step="1"
              ref={quantityInputRef}
            />
          </div>
          <button className="btn" style={{ backgroundColor: "#FF6A3D" }}>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </form>
      </div>
      <div>
        <a>
          <FontAwesomeIcon icon={faCircleInfo} /> More...
        </a>
      </div>
      <div className="pt-3 fw-bold">
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default CategoryCardItem;
