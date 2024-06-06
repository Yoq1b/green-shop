import React, { useEffect, useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../css/deleteButton.css";

const ThanksModal = () => {
  const [visible, setVisible] = useState(false);
  console.log(ThanksModal);

  useEffect(() => {
    setVisible(true); // Modalni avtomatik ravishda ochish
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center  z-200 justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" p-8 h-[210px] flex flex-col w-[400px] bg-[#46A358] rounded shadow-lg relative">
        <NavLink to="/">
          <button
            className="absolute hover:scale-110  right-[14px] top-[17px]"
            onClick={() => setVisible(false)}
          >
            <GrHomeRounded className="text-[24px] hover:rotate-360  hover:text-blue-400 text-white  font-bold" />
          </button>
        </NavLink>
        <p className="text-[30px] text-[white] text-center">
          Thanks for shopping <br /> with us😊...
        </p>
        <p className="text-[15px] mt-[15px] text-white text-center">
          They will deliver the product to your home soon!
        </p>

        <NavLink to="/">
          <p className="rotateScale text-[15px] w-[140px] m-auto  hover:text-slate-700 hover:scale-110 duration-100 mt-[10px] hover:cursor-pointer hover:underline text-[white] text-center">
            See more products
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default ThanksModal;
