import React, { useEffect, useState, useContext } from "react";
import Groupimg from "../../public/assets/Group40.png";
import "../css/deleteButton.css";
import { ProductContext, ShopContext } from "../../src/App";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ProductPage from "../components/ProductPage";
import CardSlider from "../components/CardSlider";
import { Data } from "../db/data";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const Shop = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [selectedOption, setSelectedOption] = useState("paypal");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const [counts, setCounts] = useState({});
  const { product, setProduct } = useContext(ProductContext);
  const { shop, setShop } = useContext(ShopContext);

  const increment = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1,
    }));
  };

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  const [facebookHovered, setFacebookHovered] = useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [youtubeHovered, setYoutubeHovered] = useState(false);

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

  console.log(shop);
  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
      setColor(true);
    } else {
      setProduct(product.filter((id) => id !== item.id));
      setColor(false);
    }
  };

  return (
    <>
      <div className="w-full mt-[110px]">
        <div className="flex items-center mb-[43px]">
          <NavLink to="/">
            <p className="text-[15px] font-bold text-[#3D3D3D] hover:cursor-pointer">
              Home
            </p>
          </NavLink>
          <p className="text-[15px] font-normal text-[#3D3D3D] mx-[2px]">/</p>
          <NavLink className="basket" to="/shop">
            <p className="text-[15px] font-normal text-[#3D3D3D] hover:cursor-pointer">
              Shop
            </p>
          </NavLink>
        </div>
        {Data.map(
          (item) =>
            item.id === shop[0] && (
              <div
                key={item.id}
                className="mb-[92px]  w-full flex items-center justify-between"
              >
                <div className="w-[573px]  h-[448px] flex items-center justify-between pr-[23px]">
                  <div className="flex flex-col items-center gap-[16px]">
                    <img
                      src={item.image_url}
                      alt="image"
                      className="w-[100px] h-[100px]"
                    />
                    <img
                      src={item.image_url}
                      alt="image"
                      className="w-[100px] h-[100px]"
                    />
                    <img
                      src={item.image_url}
                      alt="image"
                      className="w-[100px] h-[100px]"
                    />
                    <img
                      src={item.image_url}
                      alt="image"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src={item.image_url}
                      alt="main image"
                      className="w-[404px] h-[404px]"
                    />
                    <FiSearch className="absolute top-[-20px] right-[-20px] text-[22px] hover:cursor-pointer hover:scale-110 hover:rotate-90 duration-300" />
                  </div>
                </div>
                <div className="w-[574px] ">
                  <h3 className="text-[#3D3D3D] font-bold text-[28px] mb-[18px]">
                    {item.common_name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[#46A358] text-[22px] font-bold">
                      ${item.price}.00
                    </p>
                    <img src={Groupimg} alt="image" />
                  </div>
                  <hr className="w-full h-[0.3px] border-none my-[14px] bg-[#46A35880]" />
                  <p className="text-[#3D3D3D] text-[15px] font-medium mb-[10px]">
                    Short Description:
                  </p>
                  <p className="text-[#727272] text-[14px] font-normal leading-[24px] mb-[10px]">
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off <br /> the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate{" "}
                    <br /> your plants off the ground.
                  </p>
                  <p className="text-[#3D3D3D] text-[15px] font-medium mb-[10px]">
                    Size:
                  </p>
                  <div className="flex items-center gap-[10px]">
                    <div
                      className={`w-[28px] flex items-center justify-center hover:cursor-pointer hover:bg-slate-200  hover:border-[#46A358] h-[28px] rounded-[50%] border ${
                        selectedOption === "paypal"
                          ? "border-[#46A358] border-[2px]"
                          : "border-[#EAEAEA]"
                      }`}
                      onClick={() => handleSelect("paypal")}
                    >
                      <p
                        className={`text-[14px] font-normal ${
                          selectedOption === "paypal"
                            ? "text-[#46A358] font-bold"
                            : "text-[#3D3D3D]"
                        }`}
                      >
                        S
                      </p>
                    </div>
                    <div
                      className={`w-[28px] flex items-center justify-center hover:cursor-pointer hover:bg-slate-200  hover:border-[#46A358] h-[28px] rounded-[50%] border ${
                        selectedOption === "bank"
                          ? "border-[#46A358] border-[2px]"
                          : "border-[#EAEAEA]"
                      }`}
                      onClick={() => handleSelect("bank")}
                    >
                      <p
                        className={`text-[14px] font-normal ${
                          selectedOption === "bank"
                            ? "text-[#46A358] font-bold"
                            : "text-[#3D3D3D]"
                        }`}
                      >
                        M
                      </p>
                    </div>
                    <div
                      className={`w-[28px] flex items-center justify-center hover:cursor-pointer hover:bg-slate-200  hover:border-[#46A358] h-[28px] rounded-[50%] border ${
                        selectedOption === "cash"
                          ? "border-[#46A358] border-[2px]"
                          : "border-[#EAEAEA]"
                      }`}
                      onClick={() => handleSelect("cash")}
                    >
                      <p
                        className={`text-[14px] font-normal ${
                          selectedOption === "cash"
                            ? "text-[#46A358] font-bold"
                            : "text-[#3D3D3D]"
                        }`}
                      >
                        L
                      </p>
                    </div>
                    <div
                      className={`w-[28px] flex items-center justify-center hover:cursor-pointer hover:bg-slate-200  hover:border-[#46A358] h-[28px] rounded-[50%] border ${
                        selectedOption === "xl"
                          ? "border-[#46A358] border-[2px]"
                          : "border-[#EAEAEA]"
                      }`}
                      onClick={() => handleSelect("xl")}
                    >
                      <p
                        className={`text-[14px] font-normal ${
                          selectedOption === "xl"
                            ? "text-[#46A358] font-bold"
                            : "text-[#3D3D3D]"
                        }`}
                      >
                        XL
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-[15px]">
                    <div className="  w-[119px] h-[38px] flex items-center">
                      <button
                        onClick={() => decrement(item.id)}
                        className="increment text-white w-[33px] h-[38px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                      >
                        <HiMinusSm />
                      </button>
                      <p className="font-semibold ml-[15px] mr-[7px] text-[#3D3D3D] text-[20px] w-[20px]">
                        {counts[item.id] || 1}
                      </p>
                      <button
                        onClick={() => increment(item.id)}
                        className="increment text-white w-[33px] h-[38px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                      >
                        <HiPlusSm />
                      </button>
                    </div>
                    <NavLink to="/shop/basket">
                      <button
                        onClick={() => handleProductClick(item)}
                        className="btn-style510 w-[130px] h-[40px] rounded-[6px] bg-[#46A358] text-white text-[14px] font-bold ml-[26px]"
                      >
                        Buy NOW
                      </button>
                    </NavLink>
                    <button
                      onClick={() => handleProductClick(item)}
                      className=" w-[130px] h-[40px] rounded-[6px] bg-white border border-[#46A358] text-[#46A358] hover:text-white hover:bg-[#46A358] duration-300 text-[14px] font-bold ml-[26px]"
                    >
                      Add to cart
                    </button>
                    <button
                      className={`w-[40px] flex items-center justify-center h-[40px] rounded-[6px] bg-white border border-[#46A358] text-[#46A358] hover:text-white hover:bg-[#46A358] duration-300 text-[14px] font-bold ml-[26px]`}
                      onClick={handleClick}
                    >
                      {isLiked ? (
                        <IoMdHeart className="text-[22px] h-[35px]" />
                      ) : (
                        <IoMdHeartEmpty className="text-[22px]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[15px] font-normal mt-[10px] text-[#727272] ">
                    SKU: <span>1995751877966</span>
                  </p>
                  <p className="text-[15px] font-normal text-[#727272] ">
                    Categories: <span>Potter Plants</span>
                  </p>
                  <p className="text-[15px] font-normal text-[#727272] ">
                    Tags: <span> Home, Garden, Plants</span>
                  </p>
                  <div className="flex items-center gap-[18px]">
                    <p className="text-[15px] font-normal #3D3D3D ">
                      Share this products:
                    </p>
                    <ul className="flex items-center gap-[10px]  h-[35px]">
                      <li
                        className={`w-[30px] border-none h-[30px] rounded-[4px] hover:border-[#1877F2] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${facebookHovered ? "hovered" : ""}`}
                        onMouseEnter={() => setFacebookHovered(true)}
                        onMouseLeave={() => setFacebookHovered(false)}
                        onClick={facebookClick}
                      >
                        <FaFacebookF
                          className={`text-[15px] ${
                            facebookHovered ? "icon-hovered" : ""
                          }`}
                          style={{
                            color: facebookHovered ? "#1877F2" : "#3D3D3D",
                          }}
                        />
                      </li>
                      <li
                        className={`w-[30px] border-none h-[30px] rounded-[4px] hover:border-[#1DA1F2] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${twitterHovered ? "hovered" : ""}`}
                        onMouseEnter={() => setTwitterHovered(true)}
                        onMouseLeave={() => setTwitterHovered(false)}
                        onClick={twitterClick}
                      >
                        <FaTwitter
                          className={`text-[15px] ${
                            twitterHovered ? "icon-hovered" : ""
                          }`}
                          style={{
                            color: twitterHovered ? "#1DA1F2" : "#3D3D3D",
                          }}
                        />
                      </li>
                      <li
                        className={`w-[30px] h-[30px] border-none rounded-[4px] hover:border-[#0077b5] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${linkedinHovered ? "hovered" : ""}`}
                        onMouseEnter={() => setLinkedinHovered(true)}
                        onMouseLeave={() => setLinkedinHovered(false)}
                        onClick={linkedinClick}
                      >
                        <FaLinkedinIn
                          className={`text-[15px] ${
                            linkedinHovered ? "icon-hovered" : ""
                          }`}
                          style={{
                            color: linkedinHovered ? "#0077b5" : "#3D3D3D",
                          }}
                        />
                      </li>
                      <li
                        className={`w-[30px] h-[30px] border-none rounded-[4px] hover:border-[red] hover:cursor-pointer border flex items-center justify-center border-[#46A35833] 
        ${youtubeHovered ? "hovered" : ""}`}
                        onMouseEnter={() => setYoutubeHovered(true)}
                        onMouseLeave={() => setYoutubeHovered(false)}
                        onClick={youtubeClick}
                      >
                        <CiMail
                          className={`text-[15px] ${
                            youtubeHovered ? "icon-hovered" : ""
                          }`}
                          style={{
                            color: youtubeHovered ? "yellow" : "#3D3D3D",
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
        )}

        <div className="mb-[127px] w-full">
          <ProductPage />
        </div>
        <div className="w-full ">
          <h3 className="text-[#46A358] text-[17px] font-bold">
            Related Products
          </h3>
          <hr className="w-full h-[0.3px] border-none mt-[12px] bg-[#46A35880]" />
          <CardSlider />
        </div>
      </div>
    </>
  );
};

export default Shop;
