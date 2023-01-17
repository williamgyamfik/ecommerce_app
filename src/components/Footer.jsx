import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="text-light text-center px-2 py-3 container-fluid"
      style={{ background: "#1a2238" }}
    >
      <div className="row">
        <div className="d-flex justify-content-center px-3 py-3 ">
          <div className=" w-100 px-3 py-3">
            <h1>Product</h1>
            <ul className=" pe-3 ">
              <li>
                <Link className="text-white" to="/allcategory">
                  All category
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/category/2">
                  Jewellery
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/category/1">
                  Electronics
                </Link>
              </li>

              <li>
                <Link className="text-white" to="/category/3">
                  Mens clothing
                </Link>
              </li>

              <li>
                <Link className="text-white" to="/category/4">
                  Women Clothing
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-100 px-3 py-3">
            <h1>Support</h1>
            <ul className=" pe-3 ">
              <li>
                <Link className="text-white" to="">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-white" to="">
                  Shipping
                </Link>
              </li>
              <li>
                <Link className="text-white" to="">
                  Order Tracking
                </Link>
              </li>

              <li>
                <Link className="text-white" to="">
                  Customer Service
                </Link>
              </li>

              <li>
                <Link className="text-white" to="">
                  Return and Exchanges
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-100 px-3 py-3">
            <h1>About Us</h1>
            <ul className=" pe-3 ">
              <li>
                <Link className="text-white" to="">
                  Career
                </Link>
              </li>
              <li>
                <Link className="text-white">Company apps</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
