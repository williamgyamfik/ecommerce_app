import Category from "./Category";

import shoppingWoman from "../images/womanShopping.png";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";

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
        className="mt-5 container-lg"
        style={{ height: "250px", backgroundColor: "#1A2238" }}
      >
        <h4 className="text-center pt-3" style={{ color: "#FF6A3D" }}>
          Special offers
        </h4>
        <Carousel />
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
