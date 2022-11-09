import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { useRef } from "react";

const CategoryCardItem = (props) => {
  const amountInputRef = useRef();

  const inputRefHandler = () => {
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);
    return enteredAmount;
  };

  const addInputHandler = inputRefHandler();

  return (
    <div className="px-2 py-2" id={props.id}>
      <div className="d-flex justify-content-center align-items-center bg-transparent h-75 w-100">
        <img
          src={props.image}
          className=""
          style={{ width: "270px", height: "250px" }}
        />
      </div>

      <div className="d-flex justify-content-evenly align-items-center fw-bold ">
        <p className="fs-2 text-center">{`${"$"}${props.price}`}</p>
        <button
          className="btn"
          style={{ backgroundColor: "#FF6A3D" }}
          onClick={addInputHandler}
        >
          <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="5"
          defaultValue="1"
          step="1"
          ref={inputRefHandler}
        />
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
