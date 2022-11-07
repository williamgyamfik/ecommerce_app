import ShoppingCart from "./ShoppingCart";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between navbar fixed-top navbar-expand-lg text-white p-2 ">
      <div className="d-flex justify-content-between ms-4">
        <div className="me-4">
          <li>
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </div>

        <div className="me-4">
          <li className="nav-item ">
            <a
              className="nav-link "
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Categories
            </a>
          </li>
        </div>

        <div className="me-4 ">
          <li>
            <a className="nav-link active" aria-current="page" href="#">
              About us
            </a>
          </li>
        </div>

        <div className="me-4">
          <li>
            <a className="nav-link active" aria-current="page" href="#">
              Contact
            </a>
          </li>
        </div>
      </div>
      <div className="">
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
