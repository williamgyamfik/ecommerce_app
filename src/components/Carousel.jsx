import slide1 from "../images//noBackgroundImages/slide1.png";
import slide2 from "../images//noBackgroundImages/slide2.png";
import slide3 from "../images/noBackgroundImages/slide3.png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active " data-bs-interval="5000">
          <img
            src={slide1}
            className="d-block h-75 "
            alt="..."
            width="150px"
            height="180px"
          />
        </div>
        <div className="carousel-item" data-bs-interval="7000">
          <img
            src={slide2}
            className="d-block h-75"
            alt="..."
            width="150px"
            height="180px"
          />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img
            src={slide3}
            className="d-block h-75"
            alt="..."
            width="150px"
            height="180px"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
