import clothing from "../images/clothing.jpg";
import jewellery from "../images/jewellery.jpg";
import electronics from "../images/electronics.jpg";

import CardItem from "../components/CardItem";

const categories = [
  {
    id: 1,
    name: "electronics",
    image: electronics,
  },
  { id: 2, name: "jewellery", image: jewellery },
  {
    id: 3,
    name: "men's clothing",
    image: clothing,
  },
  {
    id: 4,
    name: "women's clothing",
    image: clothing,
  },
];

const Category = () => {
  return (
    <>
      <h2>Category</h2>
      <div className="d-flex justify-content-center">
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
