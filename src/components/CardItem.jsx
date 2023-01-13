import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <div className="container">
      <div className="card text-bg-dark">
        <img src={props.image} className="card-img category-image" alt="..." />
        <div className="card-img-overlay">
          <h1 className="card-text text-dark"> {props.name}</h1>
          <Link to={`/category/${props.id}`}>
            <button className=" btn btn-warning text-center">Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
