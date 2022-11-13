import React from "react";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BasketCard = (props) => {
  return (
    <div className="basketCard" key={props.id}>
      <div className="basketCardImageContainer">
        <img src={props.image} className="basketCardImage" alt="IMAGE HERE" />
      </div>
      <div className="basketCardDetailsContainer">
        <p className="basketCardTitle">{props.title}</p>
        <p className="basketCardPrice">{`${"$"} ${props.price}`}</p>
        <p className="basketCardPrice">{`${"x"} ${props.quantity}`}</p>
      </div>
      <div className="basketCardDeleteContainer">
        <button className="basketCardDeleteIcon">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
