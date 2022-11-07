import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Category from "./pages/Category";
import ErrorPage from "./pages/Error";
import CategoryContainer from "./pages/CategoryContainer";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <div className="mt-5">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} exact />
              <Route
                path="/category/:categoryId"
                element={<CategoryContainer />}
              />
              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
