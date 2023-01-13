import Category from "./Category";
import shoppingWoman from "../images/womanShopping.png";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container-fluid  front-view-card bg-light text-dark  border-bottom  ">
        <div className="row d-flex justify-content-center align-items-center  px-5">
          <div className=" col-md-6">
            <h1 className="d-block text-center ">
              ONLINE SHOPPING MADE
              <span style={{ color: "#FF6A3D" }}> EASY </span>
            </h1>
            <p className="fs-5">
              Browse through our quality online products and have them delivered
              to you at your doorstep
            </p>
          </div>
          <div className="  d-flex justify-content-center align-items-center col-md-6">
            <img className=" image-fluid" src={shoppingWoman} alt="" />
          </div>
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
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Home;
