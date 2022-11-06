import { Link } from "react-router-dom";

const ShoppingPageBackButton = () => {
  return (
    <div className="d-flex flex-row-reverse">
      <Link to="/">
        <button
          className="fw-bold btn rounded-5"
          style={{ backgroundColor: "#FF6A3D" }}
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default ShoppingPageBackButton;
