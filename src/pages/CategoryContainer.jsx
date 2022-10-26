import { useParams } from "react-router-dom";
import Electronics from "./Electronics";
import Jewellery from "./Jewellery";
import WomenClothing from "./WomenClothing";
import MenClothing from "./MenClothing";

const CategoryContainer = () => {
  const params = useParams();

  if (params.categoryId === "1") {
    return <Electronics />;
  } else if (params.categoryId === "2") {
    return <Jewellery />;
  } else if (params.categoryId === "3") {
    return <MenClothing />;
  } else if (params.categoryId === "4") {
    return <WomenClothing />;
  } else {
    return (
      <div>
        <h1>Category not found</h1>
      </div>
    );
  }
};

export default CategoryContainer;
