import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../store/Cart-context";
import { useRef, useState } from "react";
import { useContext } from "react";

import Modal from "./Modal";

const CategoryCardItem = (props) => {
  const quantityInputRef = useRef();
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityInputRef.current.value;
    const enteredTotalQuantity = +enteredQuantity;

    cartCtx.addItem({
      id: props.id,
      price: props.price,
      title: props.title,
      image: props.image,
      description: props.description,
      rating: props.rating,
      quantity: enteredTotalQuantity,
      totalAmount: props.price * enteredTotalQuantity,
    });
  };

  const matchingId = cartCtx.items.find((item) => item.id === props.id);
  // console.log(matchingId);

  return (
    <div className="px-2 py-5  cols-3" id={props.id}>
      <div className="d-flex justify-content-center align-items-center bg-transparent h-75 w-100 g-1">
        <img
          src={props.image}
          className="g-1 bg-image hover-zoom"
          style={{ width: "270px", height: "250px" }}
        />
      </div>

      <div className="container">
        <p className="fs-5 fw-bold text-center">{`${"$"}${props.price}`}</p>

        <form
          className="d-flex justify-content-center align-items-center"
          onSubmit={submitFormHandler}
        >
          <div className="d-flex justify-content-around me-5 align-items-center gap-3">
            <div>
              <label
                className="col-sm-2 col-form-label fw-bold"
                htmlFor="quantity"
                style={{ color: "#FF6A3D" }}
              >
                Quantity
              </label>
            </div>

            <div className="shadow-lg ">
              <input
                className="text-center"
                id="quantity"
                type="number"
                min="1"
                max="5"
                defaultValue="1"
                step="1"
                ref={quantityInputRef}
              />
            </div>
          </div>
          <div className="">
            <button
              className="btn"
              style={{ backgroundColor: "#FF6A3D", color: "#FFFF" }}
            >
              <FontAwesomeIcon icon={faBasketShopping} />
            </button>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div>
          <a
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={matchingId}
          >
            <FontAwesomeIcon icon={faCircleInfo} /> More...
          </a>
        </div>

        <Modal />

        <div className="pt-3 fw-bold">{/* <p>{props.title}</p> */}</div>
      </div>
    </div>
  );
};
export default CategoryCardItem;
