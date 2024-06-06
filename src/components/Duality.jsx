import React from "react";
import big1 from "../../public/assets/big1.png";
import big2 from "../../public/assets/big2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import mini from "../../public/assets/mini_c.svg";
import max from "../../public/assets/max_c.svg";

const Duality = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between mb-[138px] mt-[146px]">
        <div className="w-[586px] hover:[box-shadow:green_0px_5px_15px] border border-[#FBFBFB] relative h-[250px] pr-[35px] flex items-center justify-end transition-shadow duration-400">
          <img
            src={mini}
            alt="rasm"
            className="absolute bottom-0 left-0 z-20"
          />
          <img src={max} alt="rasm" className="absolute bottom-0 left-0 z-10" />
          <img src={big1} alt="rasm" className="absolute bottom-0 left-0 z-0" />
          <div className="text-right flex flex-col items-end relative z-30">
            <p className="text-[18px] uppercase text-[#3D3D3D] font-black mb-[15px]">
              Summer cactus <br /> & succulents
            </p>
            <p className="text-[14px] text-[#727272]">
              We are an online plant shop offering a wide <br /> range of cheap
              and trendy plants
            </p>
            <div className="btn-style510 w-[140px] mt-[30px] h-[40px] bg-[#46A358] hover:bg-[#3b894b] hover:cursor-pointer rounded-[6px] flex items-center justify-center">
              <p className="pl-[15px] mr-[5px] text-white font-medium text-[14px]">
                Find More
              </p>
              <FaArrowRightLong className="text-[14px] mt-[3px] text-white" />
            </div>
          </div>
        </div>
        <div className="w-[586px] hover:[box-shadow:green_0px_5px_15px] border border-[#FBFBFB] relative h-[250px] pr-[35px] flex items-center justify-end transition-shadow duration-400">
          <img
            src={mini}
            alt="rasm"
            className="absolute bottom-0 left-0 z-20"
          />
          <img src={max} alt="rasm" className="absolute bottom-0 left-0 z-10" />
          <img src={big2} alt="rasm" className="absolute bottom-0 left-0 z-0" />
          <div className="text-right flex flex-col items-end relative z-30">
            <p className="text-[18px] uppercase text-[#3D3D3D] font-black mb-[15px]">
              Styling Trends
              <br /> & much more
            </p>
            <p className="text-[14px] text-[#727272]">
              We are an online plant shop offering a wide <br /> range of cheap
              and trendy plants
            </p>
            <div className="btn-style510 w-[140px] mt-[30px] h-[40px] bg-[#46A358] hover:bg-[#3b894b] hover:cursor-pointer rounded-[6px] flex items-center justify-center">
              <p className="pl-[15px] mr-[5px] text-white font-medium text-[14px]">
                Find More
              </p>
              <FaArrowRightLong className="text-[14px] mt-[3px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Duality;
