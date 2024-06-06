import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Tuvak from "../../public/assets/tuvak.svg";
import leaf1 from "../../public/assets/green_leaf.svg";
import heart from "../../public/assets/heart_tu.svg";
import kaktus from "../../public/assets/kaktus.svg";
import tkaktus from "../../public/assets/tall_kaktus.svg";
import flower from "../../public/assets/flower_tu.svg";
import Logo from "../../public/assets/Logo.svg";
import mail from "../../public/assets/Message.svg";
import tel from "../../public/assets/Calling.svg";
import carts from "../../public/assets/carts.svg"
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const gmailClick = () => {
    window.open("https://www.gmail.com", "_blank");
  };
  const locationClick = () => {
    window.open("https://maps.app.goo.gl/F5jYP8bZ8awpPDQRA", "_blank");
  };
  const telClick = () => {
    window.open("https://www.gmail.com", "_blank");
  };
  const facebookClick = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const instagramClick = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  const twitterClick = () => {
    window.open("https://twitter.com", "_blank");
  };

  const linkedinClick = () => {
    window.open("https://www.linkedin.com", "_blank");
  };

  const youtubeClick = () => {
    window.open("https://www.youtube.com", "_blank");
  };

  const [facebookHovered, setFacebookHovered] = useState(false);
  const [instagramHovered, setInstagramHovered] = useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [youtubeHovered, setYoutubeHovered] = useState(false);

  return (
    <>
      <div className="w-[1200px] m-auto bg-[#FBFBFB]">
        <div className="w-full p-[24px] flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[204px] ">
              <div className="relative w-[74px] h-[74px] bg-[#46A35821] rounded-[50%] mt-[22px] mb-[15px]">
                <img
                  src={Tuvak}
                  alt="rasm"
                  className="w-[55px] h-[48px] absolute right-0 bottom-[3px]"
                />
                <img
                  src={leaf1}
                  alt="rasm"
                  className="w-[55px] h-[48px] absolute right-0 bottom-[47px]"
                />
              </div>
              <p className="text-[17px] text-[#3D3D3D] font-bold mb-[9px]">
                Garden Care
              </p>
              <p className="text-[14px] text-[#727272] font-normal">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <hr className="w-[1px] h-[187px] ml-[34px] mr-[27px] bg-[#46A3581A]" />
            <div className="w-[204px] ">
              <div className="relative w-[74px] h-[74px] bg-[#46A35821] rounded-[50%] mt-[22px] mb-[15px]">
                <img
                  src={heart}
                  alt="rasm"
                  className="w-[68px] h-[49px] absolute right-[-8px] bottom-[3px]"
                />
                <img
                  src={kaktus}
                  alt="rasm"
                  className="w-[35px] h-[39px] absolute right-[10px] bottom-[51px]"
                />
              </div>
              <p className="text-[17px] text-[#3D3D3D] font-bold mb-[9px]">
                Plant Renovation
              </p>
              <p className="text-[14px] text-[#727272] font-normal">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <hr className="w-[1px] h-[187px] ml-[26px] mr-[35px] bg-[#46A3581A]" />
            <div className="w-[204px] ">
              <div className="relative w-[74px] h-[74px] bg-[#46A35821] rounded-[50%] mt-[22px] mb-[15px]">
                <img
                  src={flower}
                  alt="rasm"
                  className="w-[83px] h-[40px] absolute right-[-10px] bottom-[3px]"
                />
                <img
                  src={tkaktus}
                  alt="rasm"
                  className="w-[42px] h-[49px] absolute right-[1px] bottom-[36px]"
                />
              </div>
              <p className="text-[17px] text-[#3D3D3D] font-bold mb-[9px]">
                Watering Graden
              </p>
              <p className="text-[14px] text-[#727272] font-normal">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[18px] text-[#3D3D3D] font-bold mb-[18px]">
              Would you like to join newsletters?
            </p>
            <div className="flex mb-[17px] items-center w-[354px] h-[40px] rounded-[6px] [box-shadow:0px_0px_20px_0px_#0000000F]">
              <input
                type="text"
                placeholder="enter your email address..."
                className=" w-full h-full text-[14px] text-[#ACACAC] outline-none pl-[11px]"
              />
              <button className="w-[85px] h-full bg-[#46A358] hover:bg-[#3e894d] text-white text-[18px] font-bold rounded-tr-[6px] rounded-br-[6px]">
                Join
              </button>
            </div>
            <p className="text-[13px] text-[#727272] w-[345px] leading-[22px] ">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>

        <div className="w-full pl-[24px] bg-[#46A3581A] flex items-center justify-start">
          <NavLink
            to="/"
            className="h-[45px] logo my-[26px] pt-[5px] text-[16px] font-normal text-[#3d3d3d]"
          >
            <img
              src={Logo}
              alt="logo"
              className=" w-[150px] h-[34px] border-black"
            />
          </NavLink>
          <div
            onClick={locationClick}
            className="flex items-center ml-[88px] gap-[9px] hover:cursor-pointer hover:bg-slate-300 h-[40px] rounded-[10px]"
          >
            <HiOutlineLocationMarker className="text-[#46A358] text-[18px]" />
            <p className="text-[14px] text-[#3D3D3D] font-normal">
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </div>
          <div
            onClick={gmailClick}
            className="flex hover:cursor-pointer hover:bg-slate-300 h-[30px] rounded-[10px] items-center ml-[80px] gap-[9px]"
          >
            <img src={mail} alt="icon" className="w-[20px] h-[20px]" />
            <p className="text-[14px] text-[#3D3D3D] font-normal">
              contact@greenshop.com
            </p>
          </div>
          <div
            onClick={telClick}
            className="flex hover:cursor-pointer hover:bg-slate-300 h-[30px] rounded-[10px] items-center ml-[80px] gap-[9px]"
          >
            <img src={tel} alt="icon" className="w-[20px] h-[20px]" />
            <p className="text-[14px] text-[#3D3D3D] font-normal">
              +88 01911 717 490{" "}
            </p>
          </div>
        </div>

        <div className="w-full pl-[23px] pt-[32px] flex items-start">
          <div>
            <p className="text-[18px] text-[#3D3D3D] font-bold mb-[8px]">
              My Account
            </p>
            <ul>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                My Account
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Our stores
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Contact us
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Career
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Specials
              </li>
            </ul>
          </div>
          <div className="ml-[166px]">
            <p className="text-[18px] text-[#3D3D3D] font-bold mb-[8px]">
              Help & Guide
            </p>
            <ul>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Help Center
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                How to Buy
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Shipping & Delivery
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Product Policy
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                How to Return
              </li>
            </ul>
          </div>
          <div className="ml-[140px]">
            <p className="text-[18px] text-[#3D3D3D] font-bold mb-[8px]">
              Categories
            </p>
            <ul>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                House Plants
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Potter Plants
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Seeds
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Small Plants
              </li>
              <li className="text-[14px] font-normal hover:cursor-pointer hover:text-[#46A358] mb-[8px] text-[#3D3D3D]">
                Accessories
              </li>
            </ul>
          </div>
          <div className="ml-[180px]">
            <p className="text-[18px] text-[#3D3D3D] font-bold mb-[8px]">
              Social Media
            </p>
            <ul className="flex items-center gap-[10px]  h-[35px]">
              <li
                className={`w-[30px] h-[30px] rounded-[4px] hover:border-[#1877F2] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${facebookHovered ? "hovered" : ""}`}
                onMouseEnter={() => setFacebookHovered(true)}
                onMouseLeave={() => setFacebookHovered(false)}
                onClick={facebookClick}
              >
                <FaFacebookF
                  className={`text-[15px] ${
                    facebookHovered ? "icon-hovered" : ""
                  }`}
                  style={{ color: facebookHovered ? "#1877F2" : "#46A35899" }}
                />
              </li>
              <li
                className={`w-[30px] h-[30px] rounded-[4px] hover:border-[#E4405F] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${instagramHovered ? "hovered" : ""}`}
                onMouseEnter={() => setInstagramHovered(true)}
                onMouseLeave={() => setInstagramHovered(false)}
                onClick={instagramClick}
              >
                <FaInstagram
                  className={`text-[15px] ${
                    instagramHovered ? "icon-hovered" : ""
                  }`}
                  style={{
                    color: instagramHovered ? "#E4405F" : "#46A35899",
                  }}
                />
              </li>
              <li
                className={`w-[30px] h-[30px] rounded-[4px] hover:border-[#1DA1F2] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${twitterHovered ? "hovered" : ""}`}
                onMouseEnter={() => setTwitterHovered(true)}
                onMouseLeave={() => setTwitterHovered(false)}
                onClick={twitterClick}
              >
                <FaTwitter
                  className={`text-[15px] ${
                    twitterHovered ? "icon-hovered" : ""
                  }`}
                  style={{ color: twitterHovered ? "#1DA1F2" : "#46A35899" }}
                />
              </li>
              <li
                className={`w-[30px] h-[30px] rounded-[4px] hover:border-[#0077b5] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${linkedinHovered ? "hovered" : ""}`}
                onMouseEnter={() => setLinkedinHovered(true)}
                onMouseLeave={() => setLinkedinHovered(false)}
                onClick={linkedinClick}
              >
                <FaLinkedinIn
                  className={`text-[15px] ${
                    linkedinHovered ? "icon-hovered" : ""
                  }`}
                  style={{ color: linkedinHovered ? "#0077b5" : "#46A35899" }}
                />
              </li>
              <li
                className={`w-[30px] h-[30px] rounded-[4px] hover:border-[red] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${youtubeHovered ? "hovered" : ""}`}
                onMouseEnter={() => setYoutubeHovered(true)}
                onMouseLeave={() => setYoutubeHovered(false)}
                onClick={youtubeClick}
              >
                <FaYoutube
                  className={`text-[15px] ${
                    youtubeHovered ? "icon-hovered" : ""
                  }`}
                  style={{ color: youtubeHovered ? "#FF0000" : "#46A35899" }}
                />
              </li>
            </ul>
            <p className="text-[18px] text-[#3D3D3D] font-bold mt-[25px] mb-[8px]">
              We accept
            </p>
            <img src={carts} alt="rasm" className="w-[224px] h-[26px]" />
          </div>
        </div>
        <hr className="w-full h-[0.3px] border-none bg-[#46A35833] mt-[27px] mb-[10px]" />
        <div className="w-full h-[30px]  flex items-center justify-center mb-[13px]">
          <p className="text-[14px] text-[#3D3D3D] font-medium text-center">
            © 2021 GreenShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
