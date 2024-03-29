import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <nav
//       className="py-0 navbar navbar-dark text-light navbar-expand-lg navbar-expand-md navbar-expand-sm fixed-top"
//       style={{ background: "#1a2238" }}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <h1>e-kaubanduse pood</h1>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasDarkNavbar"
//           aria-controls="offcanvasDarkNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="offcanvas offcanvas-end text-bg-dark"
//           tabindex="-1"
//           id="offcanvasDarkNavbar"
//           aria-labelledby="offcanvasDarkNavbarLabel"
//         >
//           <div className="offcanvas-header">
//             <button
//               type="button"
//               className="btn-close btn-close-white"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="offcanvas-body ">
//             <ul className="navbar-nav justify-content-end  pe-3 ">
//               <li className="nav-item">
//                 <Link className="nav-link " aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/allcategory">
//                   All category
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/category/4">
//                   Women clothing
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category/3">
//                   Mens clothing
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category/1">
//                   Electronics
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category/2">
//                   Jewelery
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div>{<ShoppingCart />}</div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

const NavBar = () => {
  return (
    <nav
      className="py-0 navbar navbar-dark text-light navbar-expand-lg  fixed-top"
      style={{ background: "#1a2238" }}
    >
      <div className="container-fluid align-items-center">
        <Link className="navbar-brand" to="/">
          <h1>e-pood</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allcategory">
                All category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/4">
                Women clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/3">
                Mens clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/1">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/2">
                Jewelery
              </Link>
            </li>
          </ul>
        </div>
        <div className="">{<ShoppingCart />}</div>
      </div>
    </nav>
  );
};

export default NavBar;
