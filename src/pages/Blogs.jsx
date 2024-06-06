import React, { useState, useEffect } from "react";
import "../css/deleteButton.css";
import { NavLink } from "react-router-dom";

const Blogs = () => {
   useEffect(() => {
     window.scroll(0, 0);
   }, []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Birinchi marta ishlaydigan funksiya
    const initialDelayTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Animatsiyani yo'qotish va keyingi funksiyani boshlash
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 3000);
    }, 6000);

    return () => {
      clearTimeout(initialDelayTimer);
      clearInterval(interval);
    };
  }, []);

  const renderText = () => {
    const text = "Coming soon...";
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {char}
      </span>
    ));
  };

  return (
    <>
      <div className="w-full  min-h-[600px]   mt-[110px]">
        <div className="flex items-center mb-[43px]">
          <NavLink to="/">
            <p className="text-[15px] font-bold text-[#3D3D3D] hover:cursor-pointer">
              Home
            </p>
          </NavLink>
          <p className="text-[15px] font-normal text-[#3D3D3D] mx-[2px]">/</p>
          <NavLink className="basket" to="/blogs">
            <p className="text-[15px] font-normal text-[#3D3D3D] hover:cursor-pointer">
              Blogs
            </p>
          </NavLink>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-[45px] mt-[100px] hover:scale-150 duration-700 hover:cursor-pointer text-[#46A358]">
            This page is currently unavailable😊
          </p>
          <p className="mt-[30px] text-[40px] text-unavailable">{renderText()}</p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
