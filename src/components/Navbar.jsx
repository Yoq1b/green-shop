import React, { useContext } from "react";
import { useState } from "react";
import Logo from "../../public/assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import animationData from "../db/animation.json";

import { ProductContext } from "../App";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Search from "./Search";
const Navbar = () => {
  const { product } = useContext(ProductContext);
  const [isHovered, setIsHovered] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [thanksModalVisible, setThanksModalVisible] = useState(false);

  const handleTrackOrder = () => {
    setThanksModalVisible(true);
  };
  const handleCloseSearch = () => {
    setThanksModalVisible(false);
  };
  return (
    <>
      <div className="pt-[25px] top-0 bg-white mb-[12px] fixed z-50">
        <div className="w-[1200px] flex items-start justify-between">
          <NavLink
            to="/"
            className="h-[45px] logo  text-[16px] font-normal text-[#3d3d3d]"
          >
            <img src={Logo} alt="logo" className=" w-[150px] h-[34px]" />
          </NavLink>
          <div className="flex items-start gap-[50px]">
            <NavLink
              to="/"
              className="h-[45px]  text-[16px] font-normal text-[#3d3d3d]"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="h-[45px] text-[16px] font-normal text-[#3d3d3d]"
            >
              Shop
            </NavLink>
            <NavLink
              to="/plantcare"
              className="h-[45px] w-[80px]  text-[16px] font-normal text-[#3d3d3d]"
            >
              Plant Care
            </NavLink>
            <NavLink
              to="/blogs"
              className="h-[45px] text-[16px] font-normal text-[#3d3d3d]"
            >
              Blogs
            </NavLink>
          </div>
          <div className="flex items-center gap-[30px]">
            <FiSearch
              onClick={handleTrackOrder}
              className="text-[22px] hover: h-[35px] hover:cursor-pointer hover:scale-110 hover:rotate-90 duration-300"
            />
            <div className="relative ">
              <NavLink
                to="/shop/basket"
                className="basket h-[45px]  text-[16px] font-normal text-[#3d3d3d] "
              >
                <FiShoppingCart className="text-[22px] hover:text-[#46A358]  text-[#3D3D3D] hover:cursor-pointer " />
              </NavLink>
              <div className="absolute top-[-5px] right-[-9px] bg-[#46A358] flex items-center justify-center  border h-[15px] rounded-[50%] w-[15px]">
                <p className="text-[10px] text-white">{product.length}</p>
              </div>
            </div>

            <SignedOut>
              <SignInButton>
                <div className="basket hover:cursor-pointer h-[45px] mb-[10px] text-[16px] font-normal text-[#3d3d3d] ">
                  <div className="btn-style501 rotateLeft  w-[100px] h-[35px] rounded-[6px] bg-[#46A358] flex items-center justify-center gap-1 ">
                    <TbLogout className="text-[22px] text-white" />
                    <p className="text-[16px] text-white font-medium">Login</p>
                  </div>
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <hr className="w-full h-[0.3px] border-none bg-[#46A35880]" />
        {thanksModalVisible && <Search handleClose={handleCloseSearch} />}{" "}
        {/* handleClose funksiyasini uzatish */}
      </div>
    </>
  );
};

export default Navbar;
