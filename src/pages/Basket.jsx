import React, { useContext, useState, useEffect } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from "../../src/App";
import { Data } from "../../src/db/data";
import "../css/deleteButton.css";
import { NavLink, useNavigate } from "react-router-dom";
import CardSlider from "../components/CardSlider";
import ErrorMOdal from "../components/ErrorModal";
import { Modal } from "@mui/material";
import ErrorModal from "../components/ErrorModal";

const Basket = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [counts, setCounts] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { product, setProduct } = useContext(ProductContext);
  const navigate = useNavigate();

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

  const deleteItem = (itemId) => {
    setProduct((prevProduct) => prevProduct.filter((id) => id !== itemId));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[itemId];
      return newCounts;
    });
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    Data.forEach((item) => {
      if (product.includes(item.id)) {
        const quantity = counts[item.id] || 1;
        totalPrice += item.price * quantity;
      }
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    if (product.length === 0) {
      setShowModal(true); // Show the modal if the product array is empty
      return;
    }

    const selectedProducts = product
      .map((productId) => {
        const item = Data.find((dataItem) => dataItem.id === productId);
        if (item) {
          return { ...item, quantity: counts[item.id] || 1 };
        }
        return null;
      })
      .filter(Boolean);

    navigate("/shop/basket/checkout", { state: { selectedProducts } });
  };

  return (
    <>
      {showModal && (
        <ErrorModal
          message="Please enter a product first!"
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="w-full  mt-[110px]">
        <div className="flex items-center mb-[51px]">
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
          <p className="text-[15px] font-normal text-[#3D3D3D] mx-[2px]">/</p>
          <NavLink className="basket" to="/shop/basket">
            <p className="text-[15px] font-normal text-[#3D3D3D] hover:cursor-pointer">
              Shopping Cart
            </p>
          </NavLink>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="w-[782px] border-blue-400">
            <div className="flex items-center">
              <p className="mr-[265px] text-[#3D3D3D] text-[16px] font-medium">
                Products
              </p>
              <p className="mr-[108px] text-[#3D3D3D] text-[16px] font-medium">
                Price
              </p>
              <p className="mr-[97px] text-[#3D3D3D] text-[16px] font-medium">
                Quantity
              </p>
              <p className="text-[#3D3D3D] text-[16px] font-medium">Total</p>
            </div>
            <hr className="w-full h-[0.3px] border-none my-[11px] bg-[#46A35880]" />
            {Data.map((item) => {
              return product.map((element) => {
                if (element === item.id) {
                  return (
                    <div
                      key={item.id}
                      className="w-[782px] bg-[#FBFBFB] mb-[10px] flex items-center h-[70px]"
                    >
                      <img
                        src={item.image_url}
                        alt="rasm"
                        className="mr-[14px] w-[70px] h-[70px]"
                      />
                      <div className="mr-[50px]  w-48 ">
                        <p className="text-[#3D3D3D] text-[16px] font-medium">
                          {item.common_name}
                        </p>
                        <p className="text-[14px] text-[#949494] font-normal">
                          SKU: <span className="text-[#727272]">{item.id}</span>
                        </p>
                      </div>
                      <p className="text-[#727272]  w-[60px] font-medium text-[16px]">
                        ${item.price}.00
                      </p>
                      <div className="ml-[85px] flex items-center">
                        <button
                          onClick={() => decrement(item.id)}
                          className="increment text-white w-[22px] h-[25px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                        >
                          <HiMinusSm />
                        </button>
                        <p className="font-semibold ml-[15px] mr-[2px] text-[18px] w-[20px]">
                          {counts[item.id] || 1}
                        </p>
                        <button
                          onClick={() => increment(item.id)}
                          className="increment text-white w-[22px] h-[25px] rounded-[31px] flex items-center justify-center bg-[#46A358] hover:bg-[#357c44] active:bg-[#24542e] text-[20px]"
                        >
                          <HiPlusSm />
                        </button>
                      </div>
                      <p className="ml-[80px]  w-[65px] text-[#46A358] font-bold text-[16px]">
                        ${item.price * (counts[item.id] || 1)}.00
                      </p>

                      <AiOutlineDelete
                        onClick={() => deleteItem(item.id)}
                        className="hover:text-red-600 hover:scale-125 ml-[40px] text-[23px] text-[#727272] hover:cursor-pointer hover:rotateRight"
                      />
                    </div>
                  );
                }
                return null;
              });
            })}
          </div>
          <div className="w-[328px]">
            <h1 className="text-[18px] text-[#3D3D3D] font-bold">
              Cart Totals
            </h1>
            <hr className="w-full h-[0.3px] border-none my-[10px] bg-[#46A35880]" />
            <p className="text-[#3D3D3D] mb-[8px] text-[14px]">Coupon Apply</p>
            <div className="border-[1.5px] border-[#46A358] flex mb-[30px] h-[40px]  rounded-[3px]">
              <input
                type="text"
                className="pl-[9px] rounded-tl-[3px] rounded-bl-[3px] text-[#A5A5A5] w-full h-full outline-none"
                placeholder="Enter coupon code here..."
              />
              <button className="w-[102px] bg-[#46A358] hover:bg-[#3e894d] text-white text-[15px] font-medium">
                Apply
              </button>
            </div>
            <div className="flex items-center justify-between mb-[15px]">
              <p className="text-[#3D3D3D] font-normal mb-[8px] text-[15px]">
                Subtotal
              </p>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="text-[#3D3D3D] text-[18px] font-medium">
                  ${getTotalPrice()}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-[21px]">
              <p className="text-[#3D3D3D] font-normal mb-[8px] text-[15px]">
                Coupon Discount
              </p>
              <p className="text-[#3D3D3D] text-[15px] font-normal">
                (-) 00.00
              </p>
            </div>
            <div className="flex items-center  justify-between mb-[26px]">
              <p className="text-[#3D3D3D] font-normal text-[15px]">Shiping</p>
              <div className="flex flex-col items-end">
                <p className="text-[#3D3D3D] text-[18px] font-medium">$00.00</p>
                <p className="text-[#46A358] text-[12px] hover:underline hover:cursor-pointer">
                  View shipping charge
                </p>
              </div>
            </div>
            <div className="flex items-center  justify-between mb-[29px]">
              <p className="text-[#3D3D3D] font-bold text-[16px]">Total</p>
              <p className=" text-[18px] font-bold text-[#46A358]">
                ${getTotalPrice()}
              </p>
            </div>
            <button
              onClick={handleCheckout}
              className="btn-style509 w-full mb-[14px] h-[40px] text-white font-bold bg-[#46A358] rounded-[3px]"
            >
              Proceed To Checkout
            </button>
            <NavLink to="/">
              <p className="mb-[87px] text-[15px]  text-[#46A358] font-normal text-center hover:underline hover:cursor-pointer">
                Continue Shopping
              </p>
            </NavLink>
          </div>
        </div>
        <NavLink to="/shop">
          <CardSlider />
        </NavLink>
      </div>
    </>
  );
};

export default Basket;
