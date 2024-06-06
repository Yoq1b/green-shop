import React, { useState, useEffect, useContext } from "react";
import { Data } from "../db/data";
import { ShopContext } from "../../src/App";

const CardSlider = () => {
  const [count, setCount] = useState(0);
  const { setShop } = useContext(ShopContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCount(index);
  };

 const handleCardClick = (itemId) => {
   setShop([itemId]);
   window.scroll(0, 0); // Bu yerda ekranni yuqoriga ko'taramiz
 };


  return (
    <div className="mt-28">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${count * 100}%)` }}
        >
          {Data.slice(0, 15).map((item) => (
            <div
              key={item.id}
              className="w-1/5  hover:cursor-pointer flex-shrink-0 px-2"
              onClick={() => handleCardClick(item.id)}
            >
              <div>
                <img src={item.image_url} alt="img" className="w-full h-60" />
                <p className="text-[#3D3D3D]">{item.common_name}</p>
                <p className="text-green-500 font-bold">${item.price}.00</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[61px] mb-[128px]">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-[12px] w-[12px] rounded-full mx-1 cursor-pointer ${
                count === i ? "bg-[#46A358]" : "border border-[#46A358]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
