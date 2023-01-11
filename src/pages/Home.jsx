import Category from "./Category";
import Carousel from "../components/Carousel";
import shoppingWoman from "../images/womanShopping.png";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center front-view-card text-light">
        <div className="front-box-sizing p-5">
          <h1 className="text-center">
            ONLINE SHOPPING MADE
            <span style={{ color: "#FF6A3D" }}> EASY </span>
          </h1>
          <p className="fs-5">
            Browse through our quality online products and have them delivered
            to you at your doorstep
          </p>
        </div>

        <div className="front-box-sizing pt-5">
          <img src={shoppingWoman} alt="" style={{ width: "200px" }} />
        </div>
      </div>
      <Category />
      <div className="mt-5 pb-5" style={{ backgroundColor: "#FF6A3D" }}>
        <h1 className="text-center pt-3" style={{ color: "#FF6A3D" }}>
          Special offers
        </h1>
        <h2 className="text-center pt-3" style={{ color: "#FF6A3D" }}>
          <span
            style={{ color: "black", background: "white", fontSize: "2em" }}
          >
            <p>
              Black Friday Sales <span style={{ color: "green" }}>25% </span>{" "}
              off
            </p>
          </span>
        </h2>
        {/* <Carousel /> */}
      </div>
      <Form />
    </>
  );
};

export default Home;
