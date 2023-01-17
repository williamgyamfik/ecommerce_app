import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <div className="container cardItemRes">
      <div className="card text-bg-dark  ">
        <img src={props.image} className="card-img category-image " alt="..." />
        <div className="card-img-overlay  mt-2">
          <h1 className="card-text text-white">{props.name}</h1>
          <Link to={`/category/${props.id}`}>
            <button className=" btn btn-warning text-center">Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
