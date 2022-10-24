import Category from "./Category";

import shoppingWoman from "../images/womanShopping.png";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center front-view-card ">
        <div className="front-box-sizing pt-5">
          <h1 className="text-center">ONLINE SHOPPING MADE EASY</h1>
          <p>
            Browse through our quality online products and have them delivered
            to you at your doorstep
          </p>
        </div>

        <div className="front-box-sizing">
          <img src={shoppingWoman} alt="" style={{ width: "200px" }} />
        </div>
      </div>
      <Category />
    </>
  );
};

export default Home;
