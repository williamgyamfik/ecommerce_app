import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <div className="d-flex justify-content-between shadow-lg category">
      <div className="p-2 ">
        <img src={props.image} />
        {/* //style={{ width: "100px", height: "120px" }} */}
        <div>
          <Link to={`/category/${props.id}`}>
            <p className="text-center" style={{ color: "#FF6A3D" }}>
              {props.name}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
