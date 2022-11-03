import Category from "./Category";

import shoppingWoman from "../images/womanShopping.png";
import Carousel from "../components/Carousel";

import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center front-view-card text-light">
        <div className="front-box-sizing p-5">
          <h1 className="text-center">
            ONLINE SHOPPING MADE{" "}
            <span style={{ color: "#FF6A3D" }}> EASY </span>
          </h1>
          <p>
            Browse through our quality online products and have them delivered
            to you at your doorstep
          </p>
        </div>

        <div className="front-box-sizing pt-5">
          <img src={shoppingWoman} alt="" style={{ width: "200px" }} />
        </div>
      </div>
      <Category />

      <div
        className="mt-5"
        style={{ height: "500px", backgroundColor: "#1A2238" }}
      >
        <h1 className="text-center pt-3" style={{ color: "#FF6A3D" }}>
          Special offers
        </h1>
        <h2 className="text-center pt-3" style={{ color: "#FF6A3D" }}>
          <span
            style={{ color: "black", background: "white", fontSize: "2em" }}
          >
            Black
          </span>{" "}
          Friday Sales
        </h2>
        <Carousel />
      </div>

      <Form />
      <div className="emUits">
        <h1>This is a result of em css</h1>
      </div>
    </>
  );
};

export default Home;
