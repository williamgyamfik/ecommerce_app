import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Category from "./pages/Category";
import Electronics from "./pages/Electronics";
import Jewellery from "./pages/Jewellery";
import Clothing from "./pages/WomenClothing";
import ErrorPage from "./pages/Error";
import CategoryContainer from "./pages/CategoryContainer";

function App() {
  return (
    <>
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
            {/* <Route path="/category/electronics" element={<Electronics />} />
          <Route path="/category/jewellery" element={<Jewellery />} />
          <Route path="/category/clothing" element={<Clothing />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
