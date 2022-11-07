import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCartItems = () => {
  console.log("CLICKED!!!");
  return (
    <div className="d-flex flex-column shadow-lg shoppingCart ">
      <button className="shoppingCartCloseButton">
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <h2>Shopping Cart</h2>
      <div className="basketContent">
        <div className="basketCard">
          <p>Image,title and delete button here</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItems;
