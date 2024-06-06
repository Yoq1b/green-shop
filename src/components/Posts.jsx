import React from "react";
import one from "../../public/assets/01.png";
import two from "../../public/assets/02.png";
import three from "../../public/assets/03.png";
import four from "../../public/assets/04.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Posts = () => {
  return (
    <>
      <div className="w-full mb-[100px]">
        <h3 className="text-[30px] text-[#3D3D3D] font-bold text-center mb-[15px]">
          Our Blog Posts
        </h3>
        <p className="text-[#727272] text-[14px] font-normal text-center mb-[35px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
        <div className="w-[full] flex items-center justify-between">
          <div
            className="w-[268px]  hover:[box-shadow:rgba(0,_0,_0,_0.3)_0px_19px_38px,_rgba(0,_0,_0,_0.22)_0px_15px_12px]
 duration-300"
          >
            <img src={one} alt="rasm" className="w-[full] h-[195px] mb-[9px]" />
            <p className="text-[14px] text-[#46A358] font-medium pl-[15px] mb-[4px]">
              September 12 I Read in 6 minutes
            </p>
            <p className="text-[20px] text-[#3D3D3D] font-bold pl-[15px] mb-[4px]">
              Cactus & Succulent <br /> Care Tips
            </p>
            <p className="text-[#727272] text-[14px] pl-[15px] mb-[9px] font-normal">
              Cacti are succulents are easy care <br /> plants for any home or
              patio.
            </p>
            <div className="group flex   w-[110px] items-center hover:text-[#46A358] hover:cursor-pointer">
              <p className="text-[#3D3D3D] pl-[15px] group-hover:text-[#46a358] font-medium text-[14px]">
                Read More
              </p>
              <IoIosArrowRoundForward className="text-[24px]" />
            </div>
          </div>
          <div
            className="w-[268px]  hover:[box-shadow:rgba(0,_0,_0,_0.3)_0px_19px_38px,_rgba(0,_0,_0,_0.22)_0px_15px_12px]
 duration-300"
          >
            <img src={two} alt="rasm" className="w-[full] h-[195px] mb-[9px]" />
            <p className="text-[14px] text-[#46A358] font-medium pl-[15px] mb-[4px]">
              September 13 I Read in 2 minutes
            </p>
            <p className="text-[20px] text-[#3D3D3D] font-bold pl-[15px] mb-[4px]">
              Top 10 Succulents for <br /> Your Home
            </p>
            <p className="text-[#727272] text-[14px] pl-[15px] mb-[9px] font-normal">
              Best in hanging baskets. Prefers <br /> medium to high light.
            </p>
            <div className="group flex   w-[110px] items-center hover:text-[#46A358] hover:cursor-pointer">
              <p className="text-[#3D3D3D] pl-[15px] group-hover:text-[#46a358] font-medium text-[14px]">
                Read More
              </p>
              <IoIosArrowRoundForward className="text-[24px]" />
            </div>
          </div>
          <div
            className="w-[268px]  hover:[box-shadow:rgba(0,_0,_0,_0.3)_0px_19px_38px,_rgba(0,_0,_0,_0.22)_0px_15px_12px]
 duration-300"
          >
            <img
              src={three}
              alt="rasm"
              className="w-[full] h-[195px] mb-[9px]"
            />
            <p className="text-[14px] text-[#46A358] font-medium pl-[15px] mb-[4px]">
              September 15 I Read in 3 minutes
            </p>
            <p className="text-[20px] text-[#3D3D3D] font-bold pl-[15px] mb-[4px]">
              Cacti & Succulent <br /> Care Tips
            </p>
            <p className="text-[#727272] text-[14px] pl-[15px] mb-[9px] font-normal">
              Cacti and succulents thrive in <br /> containers and because most
              are..
            </p>
            <div className="group flex   w-[110px] items-center hover:text-[#46A358] hover:cursor-pointer">
              <p className="text-[#3D3D3D] pl-[15px] group-hover:text-[#46a358] font-medium text-[14px]">
                Read More
              </p>
              <IoIosArrowRoundForward className="text-[24px]" />
            </div>
          </div>
          <div
            className="w-[268px]  hover:[box-shadow:rgba(0,_0,_0,_0.3)_0px_19px_38px,_rgba(0,_0,_0,_0.22)_0px_15px_12px]
 duration-300"
          >
            <img
              src={four}
              alt="rasm"
              className="w-[full] h-[195px] mb-[9px]"
            />
            <p className="text-[14px] text-[#46A358] font-medium pl-[15px] mb-[4px]">
              September 15 I Read in 2 minutes
            </p>
            <p className="text-[20px] text-[#3D3D3D] font-bold pl-[15px] mb-[4px]">
              Best Houseplants <br /> Room by Room
            </p>
            <p className="text-[#727272] text-[14px] pl-[15px] mb-[9px] font-normal">
              The benefits of houseplants are <br />
              endless. In addition to..
            </p>
            <div className="group flex   w-[110px] items-center hover:text-[#46A358] hover:cursor-pointer">
              <p className="text-[#3D3D3D] pl-[15px] group-hover:text-[#46a358] font-medium text-[14px]">
                Read More
              </p>
              <IoIosArrowRoundForward className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
