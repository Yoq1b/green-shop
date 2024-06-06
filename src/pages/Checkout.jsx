import React, { useContext, useState, useEffect } from "react";
import "../css/deleteButton.css";
import { NavLink } from "react-router-dom";
import paypal from "../../public/assets/paypal.png";
import { Data } from "../db/data";
import { ProductContext } from "../../src/App";
import { useLocation } from "react-router-dom";
import OrderModal from "../components/OrderModal";

const Checkout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { product } = useContext(ProductContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counts, setCounts] = useState({});

  const [selectedOption, setSelectedOption] = useState("paypal");
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };
  const calculateTotal = () => {
    let total = 0;
    selectedProducts.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    state: "",
    address: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.zip) newErrors.zip = "Zip is required";
    if (!formData.appartment) newErrors.appartment = "Appartment is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <p className="text-[15px] font-normal text-[#3D3D3D] mx-[2px]">/</p>
          <NavLink className="basket" to="shop/checkout">
            <p className="text-[15px] font-normal text-[#3D3D3D] hover:cursor-pointer">
              Checkout
            </p>
          </NavLink>
        </div>
        <div className="flex items-start  justify-between">
          <div className="flex items-start gap-[22px]">
            <div>
              <h3 className="mb-[21px] text-[#3D3D3D] font-bold text-[17px] ">
                Billing Address
              </h3>
              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">First Name</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>
              <div className="mb-[30px]">
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="text-[#A5A5A5] pl-[13px] text-[14px] w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">Country / Region</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>
              <div className="mb-[30px]">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="  text-[#A5A5A5] pl-[13px] text-[14px] w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3] option-custom"
                >
                  <option value="" className="option-height">
                    Select a country / region
                  </option>
                  <option value="us" className="option-height">
                    United States
                  </option>
                  <option value="ca" className="option-height">
                    Canada
                  </option>
                  <option value="uk" className="option-height">
                    United Kingdom
                  </option>
                  <option value="au" className="option-height">
                    Australia
                  </option>
                  <option value="de" className="option-height">
                    Germany
                  </option>
                  <option value="fr" className="option-height">
                    France
                  </option>
                  <option value="jp" className="option-height">
                    Japan
                  </option>
                  <option value="cn" className="option-height">
                    China
                  </option>
                  <option value="in" className="option-height">
                    India
                  </option>
                  <option value="br" className="option-height">
                    Brazil
                  </option>
                </select>
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.country}</p>
                )}
              </div>

              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">Street Address</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>
              <div className="mb-[30px]">
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="text-[#A5A5A5] pl-[13px] text-[14px] w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>
              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">State</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>

              <div className="mb-[30px]">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className=" text-[#A5A5A5] pl-[13px] text-[14px] w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3] option-custom"
                >
                  <option value="" className="option-height">
                    Select a state
                  </option>
                  <option value="us" className="option-height">
                    United States
                  </option>
                  <option value="ca" className="option-height">
                    Canada
                  </option>
                  <option value="uk" className="option-height">
                    United Kingdom
                  </option>
                  <option value="au" className="option-height">
                    Australia
                  </option>
                  <option value="de" className="option-height">
                    Germany
                  </option>
                  <option value="fr" className="option-height">
                    France
                  </option>
                  <option value="jp" className="option-height">
                    Japan
                  </option>
                  <option value="cn" className="option-height">
                    China
                  </option>
                  <option value="in" className="option-height">
                    India
                  </option>
                  <option value="br" className="option-height">
                    Brazil
                  </option>
                </select>
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}
              </div>
              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">Email address</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>
              <div className="mb-[30px]">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Enter your email address"
                  className="text-[#A5A5A5] pl-[13px] text-[14px] w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="mb-[54px] flex items-center gap-[7px]">
                <input type="checkbox" class="checkbox-round" />
                <p className="text-[#3D3D3D] font-medium text-[15px]">
                  Ship to a different address?
                </p>
              </div>
              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">
                  Order notes (optional)
                </p>
                <p className="text-[#F03800] font-black">*</p>
              </div>
              <input
                type="text"
                className="text-[#A5A5A5] pl-[13px] text-[14px] mb-[30px] w-[350px] h-[150px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
            </div>
            <div>
              <h3 className="mb-[21px]  text-white font-bold text-[17px] ">
                Billing Address
              </h3>
              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">Last Name</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>

              <div className="mb-[30px]">
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  type="text"
                  className="text-[#A5A5A5] pl-[13px] text-[14px]  w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">Town / City</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>

              <div className="mb-[30px]">
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className=" text-[#A5A5A5] pl-[13px] text-[14px] w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3] option-custom"
                >
                  <option value="" className="option-height">
                    Select a state
                  </option>
                  <option value="us" className="option-height">
                    United States
                  </option>
                  <option value="ca" className="option-height">
                    Canada
                  </option>
                  <option value="uk" className="option-height">
                    United Kingdom
                  </option>
                  <option value="au" className="option-height">
                    Australia
                  </option>
                  <option value="de" className="option-height">
                    Germany
                  </option>
                  <option value="fr" className="option-height">
                    France
                  </option>
                  <option value="jp" className="option-height">
                    Japan
                  </option>
                  <option value="cn" className="option-height">
                    China
                  </option>
                  <option value="in" className="option-height">
                    India
                  </option>
                  <option value="br" className="option-height">
                    Brazil
                  </option>
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-white ">Street Address</p>
                <p className="text-white font-black">*</p>
              </div>
              <div className="mb-[30px]">
                <input
                  name="appartment"
                  value={formData.appartment}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  className="text-[#A5A5A5] pl-[13px] text-[14px]  w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
                />
                {errors.appartment && (
                  <p className="text-red-500 text-sm">{errors.appartment}</p>
                )}
              </div>

              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">Zip</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>
              <div className=" mb-[30px]">
                <input
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  type="text"
                  className="text-[#A5A5A5] pl-[13px] text-[14px] w-[350px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm">{errors.zip}</p>
                )}
              </div>

              <div className="mb-[10px] flex items-start gap-[3px]">
                <p className="text-[15px] text-[#3D3D3D]">Phone Number</p>
                <p className="text-[#F03800] font-black">*</p>
              </div>
              <div className="mb-[30px]">
                <select
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className=" pl-[13px] text-[14px] w-[78px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3] option-custom"
                >
                  <option value="" className="option-height">
                    +966
                  </option>
                  <option value="+1" className="option-height">
                    +998
                  </option>
                  <option value="+1" className="option-height">
                    +1
                  </option>
                  <option value="+44" className="option-height">
                    +44
                  </option>
                  <option value="+61" className="option-height">
                    +61
                  </option>
                  <option value="+49" className="option-height">
                    +49
                  </option>
                  <option value="+33" className="option-height">
                    +33
                  </option>
                  <option value="+81" className="option-height">
                    +81
                  </option>
                  <option value="+86" className="option-height">
                    +86
                  </option>
                  <option value="+91" className="option-height">
                    +91
                  </option>
                  <option value="+55" className="option-height">
                    +55
                  </option>
                </select>
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-[405px]  flex flex-col items-end">
            <h3 className="mb-[21px] mr-[318px] text-[#3D3D3D] font-bold text-[17px] ">
              Your Order
            </h3>
            <div className="w-full flex items-center justify-between">
              <p className="text-[#3D3D3D] font-medium text-[16px]">Products</p>
              <p className="text-[#3D3D3D] font-medium text-[16px] mr-[16px]">
                Subtotal
              </p>
            </div>
            <hr className="w-full h-[0.3px] border-none my-[11px] bg-[#46A35880]" />
            <div className=" max-h-[290px]  mb-[17px] overflow-y-scroll border hover:cursor-n-resize hover:border-green-600 duration-300 relative z-20">
              {selectedProducts.map((item) => (
                <div
                  key={item.id}
                  className="w-[405px] h-[70px] flex items-center bg-[#FBFBFB] mb-[10px]"
                >
                  <img
                    src={item.image_url}
                    alt="rasm"
                    className="h-full w-[70px]"
                  />
                  <div className="ml-[11px]  w-[140px]">
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
                  <p className="text-[#727272] ml-[30px] text-[16px] w-[42px]">
                    (x {item.quantity})
                  </p>
                  <p className="text-[#46A358] font-bold text-[18px] ml-[35px] w-[70px]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full mb-[19px] flex items-center gap-[3px] justify-end">
              <p className="text-[14px] font-normal">Have a coupon code?</p>
              <p className="text-[14px] font-medium text-[#46A358] hover:underline hover:cursor-pointer">
                Click here
              </p>
            </div>
            <div className="w-[321px] mb-[47px] flex flex-col items-end">
              <div className="w-full mb-[15px] flex items-center justify-between">
                <p className="text-[#3D3D3D] font-normal text-[15px]">
                  Subtotal
                </p>
                <p className="text-[#3D3D3D] text-[18px] font-medium">
                  ${calculateTotal()}
                </p>
              </div>
              <div className="w-full flex mb-[21px] items-center justify-between">
                <p className="text-[#3D3D3D] font-normal text-[15px]">
                  Coupon Discount
                </p>
                <p className="text-[#3D3D3D] text-[15px] font-normal">
                  (-) 00.00
                </p>
              </div>
              <div className="w-full mb-[8px] flex items-center justify-between">
                <p className="text-[#3D3D3D] font-normal text-[15px]">
                  Shiping
                </p>
                <p className="text-[#3D3D3D] text-[18px] font-medium">$00.00</p>
              </div>
              <p className="text-[#46A358] text-[12px] font-normal hover:underline hover:cursor-pointer">
                View shipping charge
              </p>
              <hr className="w-full h-[0.3px] border-none my-[17px] bg-[#46A35880]" />
              <div className="w-full mb-[8px] flex items-center justify-between">
                <p className="text-[#3D3D3D] font-normal text-[15px]">Total</p>
                <p className="text-[#46A358] text-[18px] font-bold">
                  ${calculateTotal()}
                </p>
              </div>
            </div>
            <div className="w-[321px] ">
              <h3 className="text-[#3D3D3D] font-bold text-[17px] mb-[19px]">
                Payment Method
              </h3>
              <div>
                <div
                  className={`w-full mb-[15px] hover:cursor-pointer hover:bg-slate-200 hover:scale-105 duration-150 hover:border-[#46A358] h-[45px] rounded-[3px] border ${
                    selectedOption === "paypal"
                      ? "border-[#46A358] border-[2px]"
                      : "border-[#EAEAEA]"
                  } flex items-center gap-[10px] pl-[11px]`}
                  onClick={() => handleSelect("paypal")}
                >
                  <div className="checkbox-wrapper-48">
                    <label>
                      <input
                        type="radio"
                        name="cb"
                        checked={selectedOption === "paypal"}
                        onChange={() => handleSelect("paypal")}
                      />
                    </label>
                  </div>
                  <img src={paypal} alt="rasm" className="w-[224px] h-[26px]" />
                </div>
                <div
                  className={`w-full mb-[15px] hover:cursor-pointer  hover:bg-slate-200 hover:scale-105 duration-150 hover:border-[#46A358] h-[45px] rounded-[3px] border ${
                    selectedOption === "bank"
                      ? "border-[#46A358] border-[2px]"
                      : "border-[#EAEAEA]"
                  } flex items-center gap-[10px] pl-[11px]`}
                  onClick={() => handleSelect("bank")}
                >
                  <div className="checkbox-wrapper-48">
                    <label>
                      <input
                        type="radio"
                        name="cb"
                        checked={selectedOption === "bank"}
                        onChange={() => handleSelect("bank")}
                      />
                    </label>
                  </div>
                  <p className="text-[#3D3D3D] text-[15px] font-normal">
                    Direct bank transfer
                  </p>
                </div>
                <div
                  className={`w-full mb-[49px] hover:cursor-pointer hover:bg-slate-200 hover:scale-105 hover:mx-scale-120 duration-150 hover:border-[#46A358] h-[45px] rounded-[3px] border ${
                    selectedOption === "cash"
                      ? "border-[#46A358] border-[2px]"
                      : "border-[#EAEAEA]"
                  } flex items-center gap-[10px] pl-[11px]`}
                  onClick={() => handleSelect("cash")}
                >
                  <div className="checkbox-wrapper-48">
                    <label>
                      <input
                        type="radio"
                        name="cb"
                        checked={selectedOption === "cash"}
                        onChange={() => handleSelect("cash")}
                      />
                    </label>
                  </div>
                  <p className="text-[#3D3D3D] text-[15px] font-normal">
                    Cash on delivery
                  </p>
                </div>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="btn-style509 mb-[210px] w-full bg-[#46A358] text-white text-[15px] font-bold h-[45px] rounded-[3px] border border-[#EAEAEA] flex items-center justify-center"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <OrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Checkout;
