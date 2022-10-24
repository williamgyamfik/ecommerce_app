const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between navbar fixed-top navbar-expand-lg bg-light p-2 bg-light">
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
    </nav>
  );
};

export default NavBar;