import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const ShoppingPageBackButton = () => {
  return (
    <div className="d-flex flex-row-reverse">
      <Link to="/">
        <button
          className="fw-bold btn rounded-5"
          style={{ backgroundColor: "#FF6A3D" }}
        >
          <FontAwesomeIcon icon={faLeftLong} />
        </button>
      </Link>
    </div>
  );
};

export default ShoppingPageBackButton;
