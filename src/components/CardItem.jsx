import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <div className="d-flex justify-content-between ">
      <div className="p-2 ">
        <img src={props.image} style={{ width: "100px", height: "120px" }} />

        <div>
          <Link to={`/category/${props.id}`}>
            <button>{props.name}</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
