import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import thanks from "../../public/assets/thankyou.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../css/deleteButton.css";
import ThanksModal from "./ThanksModal";

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const location = useLocation();
  const navigate = useNavigate();

  const { selectedProducts } = location.state || { selectedProducts: [] };
  const calculateTotal = () => {
    let total = 0;
    selectedProducts.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const currentDate = new Date();

  const year = currentDate.getFullYear(); // Yil
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate(); // Kun

  console.log(`Hozirgi sana: ${year}-${month}-${day}`);

  const [thanksModalVisible, setThanksModalVisible] = useState(false);

  const handleTrackOrder = () => {
    setThanksModalVisible(true);
  };

  return (
    <div className="w-full h-full top-0 flex  overflow-x-scroll items-center justify-center bg-black z-50 bg-opacity-50  fixed left-0">
      <div className=" mt-[366px] mb-[100px]  bg-white opacity-100 w-[578px]">
        <div className="w-full relative flex flex-col items-center justify-center h-[156px] bg-[#46A3580F]">
          <button
            className="absolute  hover:rotateX duration-500 right-[14px] top-[17px]"
            onClick={onClose}
          >
            <IoMdClose className="text-[24px] text-[#46A358] hover:text-red-600 font-bold" />
          </button>
          <img
            src={thanks}
            alt="rasm"
            className="mb-[16px] w-[80px] h-[80px]"
          />
          <p className="text-[#727272] font-normal text-[16px]">
            Your order has been received
          </p>
        </div>
        <hr className="w-full h-[2px] border-none bg-slate-200" />
        <div className="w-full h-[65px]  flex items-center justify-between px-[42px]">
          <div className="w-[50%] h-full flex items-center justify-between">
            <div className="w-[94px] ">
              <p className="text-[#727272] font-normal text-[14px]">
                Order Number
              </p>
              <p className="text-[#727272] font-bold text-[15px]">19586687</p>
            </div>
            <hr className="w-[31px] h-[1.2px] rotate-90 bg-slate-200" />
            <div>
              <p className="text-[#727272] font-normal text-[14px]">Date</p>
              <p className="text-[#727272] font-bold text-[15px]">
                {day} {month}, {year}
              </p>
            </div>
          </div>
          <hr className="w-[31px] h-[1.2px] gap-[22px] rotate-90 bg-slate-200" />
          <div className="w-[50%] h-full flex items-center justify-center gap-[11px]">
            <div className="w-[65px] ">
              <p className="text-[#727272] font-normal text-[14px]">Total</p>
              <p className="text-[#727272] font-bold text-[15px]">
                {calculateTotal()}
              </p>
            </div>
            <hr className="w-[31px] h-[1.2px] rotate-90 bg-slate-200" />
            <div className="w-[150px] ">
              <p className="text-[#727272]  font-normal text-[14px]">
                Payment Method
              </p>
              <p className="text-[#727272]  font-bold text-[15px]">
                Cash on delivery
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full h-[1px] border-none mb-[18px] bg-slate-200" />
        <div className="w-full px-[41px]">
          <h4 className="text-[#3D3D3D] mb-[12px] font-bold text-[15px]">
            Order Details
          </h4>
          <div className="flex items-center justify-between">
            <p className="text-[#3D3D3D]  font-medium text-[16px]">Products</p>
            <p className="text-[#3D3D3D] font-medium text-[16px] ml-[140px]">
              Qty
            </p>
            <p className="text-[#3D3D3D]  font-medium text-[16px] mr-[13px]">
              Subtotal
            </p>
          </div>
          <hr className="w-full h-[1px] border-none my-[11px] bg-slate-200" />
          <div className=" max-h-[270px]  mb-[17px] overflow-y-scroll border hover:cursor-n-resize  hover:border-green-500 hover:z-20  duration-100 box-content relative">
            {selectedProducts.map((item) => (
              <div
                key={item.id}
                className="w-full pr-[13px] h-[70px] flex items-center justify-between bg-[#FBFBFB] mb-[10px]"
              >
                <div className="flex items-center gap-[11px]">
                  <img
                    src={item.image_url}
                    alt="rasm"
                    className="h-full w-[70px]"
                  />
                  <div className="  w-[140px]">
                    <p className="text-[#3D3D3D] text-[16px] mb-[0px] font-medium">
                      {item.common_name}
                    </p>
                    <p className="text-[14px] text-[#949494] font-normal">
                      SKU:{" "}
                      <span className="text-[#727272] text-[14px]">
                        {item.id}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[74px]">
                  <p className="text-[#727272] text-[16px] w-[42px]">
                    (x {item.quantity})
                  </p>
                  <p className="text-[#46A358] font-bold text-[18px] w-[70px]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end pr-[20px] mb-[25px] gap-[214px]">
            <p className="text-[#3D3D3D] text-[15px] font-normal">Shiping</p>
            <p className="text-[#3D3D3D] text-[18px] font-medium">$00.00</p>
          </div>
          <div className="flex items-center justify-end pr-[15px] mb-[25px] gap-[180px]">
            <p className="text-[#3D3D3D] text-[18px] font-bold">Total</p>
            <p className="text-[#46A358] text-[18px] text-end font-bold  w-[100px]">
              ${calculateTotal()}
            </p>
          </div>
          <hr className="w-full h-[1px] mb-[18px] border-none bg-slate-200" />
          <p className="text-[#727272] leading-[22px] mb-[49px] text-[14px] font-normal text-center">
            Your order is currently being processed. You will receive an order{" "}
            <br />
            confirmation email shortly with the expected delivery date for your
            items.
          </p>
        </div>
        <div className="w-full flex justify-center px-[41px]">
          <button
            onClick={handleTrackOrder}
            className="btn-style509  w-[162px] h-[45px] mb-[58px]  bg-[#46A358] text-white font-bold text-[16px] rounded-[5px]"
          >
            Track your order
          </button>
        </div>
      </div>
      {thanksModalVisible && <ThanksModal />}
    </div>
  );
};

export default OrderModal;
