import { useState } from "react";
import { useContext } from "react";
import { Data } from "../db/data";
import Banner from "../../public/assets/sale_banner.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { IoChevronBackOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { AboutContext, ProductContext, ShopContext } from "../App";

import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}

const Home_cards = () => {
  const [liked, setLiked] = useState([]);
  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
      setColor(true);
    } else {
      setProduct(product.filter((id) => id !== item.id));
      setColor(false);
    }
  };

  const toggleLike = (itemId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
  };

  const [value, setValue] = React.useState([0, 60]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);

  const handleHeartClick = (event) => {
    const div = event.target.closest(".heart-icon-container");
    if (div) {
      div.classList.toggle("heart-icon-container--liked");
    }
  };
  const { product, setProduct } = useContext(ProductContext);
  const { shop, setShop } = useContext(ShopContext);
  console.log(product);
  const [color, setColor] = useState(false);
  const { about, setAbout } = useContext(AboutContext);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSale(Number(selectedValue));
  };

  return (
    <div className=" flex justify-between  mt-[35px]">
      <div className="w-[30%]">
        <div className=" bg-[--bg] pl-[18px] pb-[18px] pr-[24px] w-[100%]">
          <div className="mb-[30px] ">
            <p className=" text-[20px]  font-bold mb-[20px] text-[#3D3D3D]">
              Categories
            </p>
            <ul className="pl-[12px] flex flex-col text-[#3D3D3D] gap-[20px] tex-[--second] ">
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  House Plants
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (33)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Potter Plants
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (12)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Seeds
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (65)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Small Plants
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (39)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Big Plants
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (23)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Succulents
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (17)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Trerrariums
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (19)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Gardening
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (13)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Accessories
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (18)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className=" text-[20px] text-[#3D3D3D] justify-start items-start font-bold mb-[20px] ">
              Price Range
            </p>
            <div className="flex pl-[12px] gap-4 flex-col mb-[00px] w-[80%] ">
              <p className="text-[18px] text-[#3D3D3D]">
                Price:{" "}
                <span className=" font-bold text-[#46A358] ">$39 - $1230</span>
              </p>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  sx={{
                    color: "#46A358",
                    "& .MuiSlider-thumb": {
                      borderColor: "#46A358",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#46A358",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#46A358",
                    },
                    "& .MuiSlider-valueLabel": {
                      backgroundColor: "#46A358",
                    },
                  }}
                />
              </Box>
              <p>
                <span className="bg-[--primary]  rounded-md text-white text-[18px] py-2 px-7 hover:opacity-70 ">
                  FIlter
                </span>
              </p>
            </div>
          </div>

          <div>
            <p className=" text-[20px] font-bold mb-[20px] text-[#3D3D3D]">
              Size
            </p>
            <ul className="pl-[12px] flex flex-col text-[#3D3D3D] gap-[20px] tex-[--second] ">
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Small
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (119)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Medium
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (86)
                </span>
              </li>
              <li className="flex cursor-pointer hover:scale-105 font-normal justify-between text-[18px] items-center group transition-all duration-[300ms] hover:text-[#46A358] hover:font-bold">
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  Large
                </span>
                <span className="group-hover:text-[#46A358] group-hover:font-bold">
                  (78)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <img src={Banner} alt="img" />
      </div>
      <div>
        <div className="flex  items-center justify-between">
          <ul className="flex gap-10  pt-[15px] w-full  z-30 bg-white cursor-pointer mb-[31px]">
            <li
              onClick={() => setSale(1)}
              className={
                sale == 1 &&
                "text-green-600 font-medium  border-b-4 pb-1 h-[30px]  border-green-500 duration-500 "
              }
            >
              All plants
            </li>
            <li
              onClick={() => setSale(2)}
              className={
                sale == 2 &&
                "text-green-600 font-medium border-b-4 pb-1 border-green-500 duration-500"
              }
            >
              New Arrivalix
            </li>
            <li
              onClick={() => setSale(3)}
              className={
                sale == 3 &&
                "text-green-600  font-medium border-b-4 pb-1 border-green-500 duration-500"
              }
            >
              Sale
            </li>
          </ul>
          <div className="flex  w-[250px] items-center">
            <p className="text-[#3D3D3D] text-[15px] font-normal">Short by:</p>
            <select className="outline-none" onChange={handleSelectChange}>
              <option value="1" label="Default sorting"></option>
              <option value="2" label="New"></option>
              <option value="3" label="Sale-20%"></option>
            </select>
          </div>
        </div>
        <div
          onChange={() => setAbout([item.id])}
          className=" grid  grid-cols-3 gap-x-[33px] gap-y-[80px] mt-2"
        >
          {sale == 1 &&
            Data.slice(0, 9).map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[250px] hover:scale-105 hover:[box-shadow:green_0px_2px_4px_0px,_rgba(14,_30,_37,_0.32)_0px_2px_16px_0px]  border-black cursor-pointer group relative duration-200"
                >
                  <NavLink to="/shop">
                    <img
                      onClick={() => {
                        setShop([item.id]);
                      }}
                      src={item.image_url}
                      alt="Flower"
                      className="  w-full h-[250px] mb-[12px] "
                    />
                  </NavLink>

                  <div className="flex gap-[10px] absolute ml-[30%] justify-center z-[-1] group-hover:z-10 duration-200 group-hover:translate-y-[-52px]">
                    <div
                      onClick={() => handleProductClick(item)}
                      className={`w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center ${
                        color ? "text-[#46A358]" : ""
                      }`}
                    >
                      <FiShoppingCart className="text-[20px] hover:text-[#46A358] h-[35px]" />
                    </div>

                    <div
                      className={`w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center ${
                        liked.includes(item.id) ? "text-[#46A358]" : ""
                      }`}
                      onClick={() => toggleLike(item.id)}
                    >
                      {liked.includes(item.id) ? (
                        <IoMdHeart className="text-[20px]  text-[#46A358]" />
                      ) : (
                        <IoMdHeartEmpty className="text-[20px] h-[35px] hover:text-[#46A358]" />
                      )}
                    </div>

                    <div className="w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center">
                      <FiSearch className="text-[20px] hover:text-[#46A358] h-[35px]" />
                    </div>
                  </div>
                  <div className="bg-white">
                    <p className="ml-[10px] mb-[6px] text-[16px] text-[#3D3D3D] font-normal">
                      {item.common_name}
                    </p>
                    <h1 className="text-[#46A358] mb-[5px] ml-[10px] font-bold text-[18px]">
                      ${item.price}.00
                    </h1>
                  </div>
                </div>
              );
            })}
          {sale == 2 &&
            Data.slice(9, 18).map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[250px] hover:scale-105 hover:[box-shadow:green_0px_2px_4px_0px,_rgba(14,_30,_37,_0.32)_0px_2px_16px_0px]  border-black cursor-pointer group relative duration-200"
                >
                  <NavLink to="/shop">
                    <img
                      onClick={() => {
                        setShop([item.id]);
                      }}
                      src={item.image_url}
                      alt="Flower"
                      className="  w-full h-[250px] mb-[12px] "
                    />
                  </NavLink>
                  <div className="flex gap-[10px] absolute ml-[30%] justify-center z-[-1] group-hover:z-10 duration-200 group-hover:translate-y-[-52px]">
                    <div
                      onClick={() => handleProductClick(item)}
                      className={`w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center ${
                        color ? "text-[#46A358]" : ""
                      }`}
                    >
                      <FiShoppingCart className="text-[20px] hover:text-[#46A358] h-[35px]" />
                    </div>
                    <div
                      className={`w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center ${
                        liked.includes(item.id) ? "text-[#46A358]" : ""
                      }`}
                      onClick={() => toggleLike(item.id)}
                    >
                      {liked.includes(item.id) ? (
                        <IoMdHeart className="text-[20px]  text-[#46A358]" />
                      ) : (
                        <IoMdHeartEmpty className="text-[20px] h-[35px] hover:text-[#46A358]" />
                      )}
                    </div>
                    <div className="w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center">
                      <FiSearch className="text-[20px] hover:text-[#46A358] h-[35px]" />
                    </div>
                  </div>
                  <div className="bg-white">
                    <p className=" mb-[6px] ml-[10px] text-[16px] text-[#3D3D3D] font-normal">
                      {item.common_name}
                    </p>
                    <h1 className="text-[#46A358] ml-[10px] mb-[5px] font-bold text-[18px]">
                      ${item.price}.00
                    </h1>
                  </div>
                </div>
              );
            })}
          {sale == 3 &&
            Data.slice(11, 27).map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[250px] hover:scale-105 hover:[box-shadow:green_0px_2px_4px_0px,_rgba(14,_30,_37,_0.32)_0px_2px_16px_0px]  border-black cursor-pointer group relative duration-200"
                >
                  <NavLink to="/shop">
                    <img
                      onClick={() => {
                        setShop([item.id]);
                      }}
                      src={item.image_url}
                      alt="Flower"
                      className="  w-full h-[250px] mb-[12px] "
                    />
                  </NavLink>
                  <div className="flex gap-[10px] absolute ml-[30%] justify-center z-[-1] group-hover:z-10 duration-200 group-hover:translate-y-[-52px]">
                    <div
                      onClick={() => handleProductClick(item)}
                      className={`w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center ${
                        color ? "text-[#46A358]" : ""
                      }`}
                    >
                      <FiShoppingCart className="text-[20px] hover:text-[#46A358] h-[35px]" />
                    </div>
                    <div
                      className={`w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center ${
                        liked.includes(item.id) ? "text-[#46A358]" : ""
                      }`}
                      onClick={() => toggleLike(item.id)}
                    >
                      {liked.includes(item.id) ? (
                        <IoMdHeart className="text-[20px]  text-[#46A358]" />
                      ) : (
                        <IoMdHeartEmpty className="text-[20px] h-[35px] hover:text-[#46A358]" />
                      )}
                    </div>
                    <div className="w-[35px] h-[35px] bg-white hover:scale-110 duration-[200ms] rounded-[4px] flex items-center justify-center">
                      <FiSearch className="text-[20px] hover:text-[#46A358] h-[35px]" />
                    </div>
                  </div>
                  <div className="bg-white">
                    <p className=" mb-[6px] ml-[10px] text-[16px] text-[#3D3D3D] font-normal">
                      {item.common_name}
                    </p>
                    <h1 className="text-[#46A358] ml-[10px] mb-[5px] font-bold text-[18px]">
                      ${item.price}.00
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex w-[210px]   absolute right-0  mt-[90px] items-center justify-left gap-[10px] cursor-pointer">
          {sale1 !== 1 && (
            <p
              className=" w-[35px] h-[35px] flex items-center justify-center border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 - 1)}
            >
              <IoChevronBackOutline />
            </p>
          )}
          <p
            onClick={() => {
              setSale1(1);
              setSale(1);
            }}
            className={
              sale1 == 1
                ? "w-[35px] h-[35px] flex items-center font-bold justify-center border rounded-[4px] bg-green-500 text-white"
                : "w-[35px] h-[35px] hover:bg-slate-200 flex items-center justify-center border border-[#E5E5E5] rounded-[4px]"
            }
          >
            1
          </p>
          <p
            onClick={() => {
              setSale1(2);
              setSale(2);
            }}
            className={
              sale1 == 2
                ? "w-[35px] h-[35px] flex items-center font-bold justify-center border rounded-[4px] bg-green-500 text-white"
                : "w-[35px] h-[35px] hover:bg-slate-200 flex items-center justify-center border border-[#E5E5E5] rounded-[4px]"
            }
          >
            2
          </p>
          <p
            onClick={() => {
              setSale1(3);
              setSale(3);
            }}
            className={
              sale1 == 3
                ? "w-[35px]  h-[35px] flex items-center font-bold justify-center border rounded-[4px] bg-green-500 text-white"
                : "w-[35px] hover:bg-slate-200 h-[35px] flex items-center justify-center border border-[#E5E5E5] rounded-[4px]"
            }
          >
            3
          </p>

          {sale1 !== 3 && (
            <p
              className=" w-[35px] h-[35px] flex items-center justify-center border rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => setSale1(sale1 + 1)}
            >
              <GrFormNext />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home_cards;
