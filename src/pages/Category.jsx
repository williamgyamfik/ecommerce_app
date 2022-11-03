// import clothing from "../images/clothing.jpg";
import jewellery from "../images/jewellery.jpg";
import electronics from "../images/electronics.jpg";
import menClothing from "../images/menClothing.jpg";
import womenClothing from "../images/womenClothing.jpg";

import CardItem from "../components/CardItem";

import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
  },
  { id: 2, name: "Jewellery", image: jewellery },
  {
    id: 3,
    name: "Men's clothing",
    image: menClothing,
  },
  {
    id: 4,
    name: "Women's clothing",
    image: womenClothing,
  },
];

const Category = () => {
  return (
    <>
      <h1 className="text-center mt-5 " style={{ color: "#FF6A3D" }}>
        Category
      </h1>

      <div className="d-flex justify-content-center  flex-sm-wrap">
        {categories.map((category) => {
          return (
            <CardItem
              key={category.id}
              name={category.name}
              image={category.image}
              id={category.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;
