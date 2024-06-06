import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const AboutContext = createContext();
export const ProductContext = createContext();
export const ShopContext = createContext();

const App = () => {
  const [about, setAbout] = useState([]);
  const [product, setProduct] = useState([]);
  const [shop, setShop] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ product, setProduct }}>
        <AboutContext.Provider value={{ about, setAbout }}>
          <ShopContext.Provider value={{ shop, setShop }}>
            <div className="w-[100%] ">
              <BrowserRouter>
                <div className="w-[1200px] m-auto">
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/plantcare" element={<PlantCare />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/shop/basket" element={<Basket />} />
                    <Route
                      path="/shop/basket/checkout"
                      element={<Checkout />}
                    />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </div>
                <Footer />
                <NavLink to="/login">
                  <div className=" fixed bottom-12 flex flex-col items-center justify-center right-12 ">
                    <FaRegUserCircle className="text-[50px] text-[#46A358] hover:scale-110 duration-200 hover:cursor-pointer" />
                    <p className="text-[20px]">My Account</p>
                  </div>
                </NavLink>
              </BrowserRouter>
            </div>
          </ShopContext.Provider>
        </AboutContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
