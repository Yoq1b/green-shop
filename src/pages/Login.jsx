import React, { useState, useEffect } from "react";
import icon from "../../public/assets/bgicon.svg";
import { FaRegUser } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoDownloadOutline, IoLogOutOutline } from "react-icons/io5";
import { TiWarningOutline } from "react-icons/ti";

const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
    if (!formData.address) newErrors.address = "Username is required";
    if (!formData.password) newErrors.password = "Current password is required";
    if (!formData.passworda) newErrors.passworda = "New password is required";
    if (!formData.passwordb)
      newErrors.passwordb = "Confirm password is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.zip) newErrors.zip = "Zip is required";
    if (!formData.appartment) newErrors.appartment = "Appartment is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setModalVisible(true);
    }
  };
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div className="mt-[150px] mb-[300px]  flex items-start justify-between  w-full">
        <div className="w-[310px]  pt-[17px]">
          <p className="text-[#3D3D3D] font-bold text-[18px] mb-[18px]">
            My Account
          </p>
          <div
            className={`w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 ${
              activeTab === "description"
                ? "border-l-[5px] border-l-[#46A358]"
                : "text-[#3D3D3D] border-l-[5px] hover:border-l-slate-300 border-l-white"
            }`}
            onClick={() => setActiveTab("description")}
          >
            <FaRegUser
              className={`text-[18px] ml-[18px] mr-[11px] ${
                activeTab === "description"
                  ? "text-[#46A358]"
                  : "text-[#727272]"
              }`}
            />
            <p
              className={` text-[15px] ${
                activeTab === "description"
                  ? "text-[#46A358] font-bold"
                  : "text-[#727272] font-medium"
              }`}
            >
              Account Details
            </p>
          </div>
          <div
            className={`w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 ${
              activeTab === "reviews"
                ? "border-l-[5px] border-l-[#46A358]"
                : "text-[#3D3D3D] border-l-[5px] hover:border-l-slate-300 border-l-white"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            <SlLocationPin
              className={`text-[18px] ml-[18px] mr-[11px] ${
                activeTab === "reviews" ? "text-[#46A358]" : "text-[#727272]"
              }`}
            />
            <p
              className={` text-[15px] ${
                activeTab === "reviews"
                  ? "text-[#46A358] font-bold"
                  : "text-[#727272] font-medium"
              }`}
            >
              Address
            </p>
          </div>
          <div
            className="w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 text-[#3D3D3D] border-l-[5px] border-l-white"

            // onClick={() => setActiveTab("reviews")}
          >
            <HiOutlineShoppingCart className="text-[20px] ml-[18px] mr-[11px]  text-[#727272]" />
            <p className="font-medium text-[15px]  text-[#727272]">Orders</p>
          </div>
          <div
            className="w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 text-[#3D3D3D] border-l-[5px] border-l-white"
            // onClick={() => setActiveTab("reviews")}
          >
            <CiHeart className="text-[20px] ml-[18px] mr-[11px]  text-[#727272]" />
            <p className="font-medium text-[15px]  text-[#727272]">Wishlist</p>
          </div>
          <div
            className="w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 text-[#3D3D3D] border-l-[5px] border-l-white"
            // onClick={() => setActiveTab("reviews")}
          >
            <TbMessageCircle2 className="text-[20px] ml-[18px] mr-[11px]  text-[#727272]" />
            <p className="font-medium text-[15px]  text-[#727272]">Reports</p>
          </div>
          <div
            className="w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 text-[#3D3D3D] border-l-[5px] border-l-white"
            // onClick={() => setActiveTab("reviews")}
          >
            <IoDownloadOutline className="text-[20px] ml-[18px] mr-[11px]  text-[#727272]" />
            <p className="font-medium text-[15px]  text-[#727272]">Download</p>
          </div>
          <div
            className="w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 text-[#3D3D3D] border-l-[5px] border-l-white"
            // onClick={() => setActiveTab("reviews")}
          >
            <TiWarningOutline className="text-[20px] ml-[18px] mr-[11px]  text-[#727272]" />
            <p className="font-medium text-[15px]  text-[#727272]">Support</p>
          </div>
          <hr className="mb-[19px] mt-[10px]" />
          <div
            className="w-full h-[40px] cursor-pointer flex items-center gap-[10px] hover:bg-slate-200 text-[#3D3D3D] border-l-[5px] border-l-white"
            // onClick={() => setActiveTab("reviews")}
          >
            <IoLogOutOutline
              className={`text-[20px] ml-[18px] mr-[5px] ${
                activeTab === "reviews" ? "text-[#46A358]" : "text-[#46A358]"
              }`}
            />
            <p
              className={`font-bold text-[15px] ${
                activeTab === "reviews" ? "text-[#46A358]" : "text-[#46A358] "
              }`}
            >
              Logout
            </p>
          </div>
        </div>
        {activeTab === "description" && (
          <div>
            <h3 className="mb-[21px] text-[#3D3D3D] font-bold text-[17px] ">
              Personal Information
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
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
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
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-[10px] flex items-start gap-[3px]">
              <p className="text-[15px] text-[#3D3D3D]">Username</p>
              <p className="text-[#F03800] font-black">*</p>
            </div>
            <div className="mb-[30px]">
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <p className="text-[#3D3D3D] font-medium text-[16px] mb-[20px]">
              Password change
            </p>
            <div className="mb-[10px] flex items-start gap-[3px]">
              <p className="text-[15px] text-[#3D3D3D]">Current password</p>
              <p className="text-[#F03800] font-black">*</p>
            </div>
            <div className="mb-[30px]">
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="mb-[10px] flex items-start gap-[3px]">
              <p className="text-[15px] text-[#3D3D3D]">New password</p>
              <p className="text-[#F03800] font-black">*</p>
            </div>
            <div className="mb-[30px]">
              <input
                name="passworda"
                type="password"
                value={formData.passworda}
                onChange={handleInputChange}
                required
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.passworda && (
                <p className="text-red-500 text-sm">{errors.passworda}</p>
              )}
            </div>
            <div className="mb-[10px] flex items-start gap-[3px]">
              <p className="text-[15px] text-[#3D3D3D]">Confirm new password</p>
              <p className="text-[#F03800] font-black">*</p>
            </div>
            <div className="mb-[30px]">
              <input
                name="passwordb"
                type="password"
                value={formData.passwordb}
                onChange={handleInputChange}
                required
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.passwordb && (
                <p className="text-red-500 text-sm">{errors.passwordb}</p>
              )}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="hover:bg-[#367f44] w-[131px] mb-[210px] bg-[#46A358] text-white text-[15px] font-bold h-[45px] rounded-[3px] border border-[#EAEAEA] flex items-center justify-center"
            >
              Save Change
            </button>
          </div>
        )}
        {activeTab === "description" && (
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
                className="text-[#A5A5A5] pl-[13px] text-[14px]  w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
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
            <p className="text-[15px] mb-[7px] text-[#3D3D3D]">Photo</p>
            <div className="flex items-center gap-[23px]">
              <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center border border-[#EAEAEA]">
                <img src={icon} alt="" className="w-[24px] h-[24px]" />
              </div>

              <div className="flex items-center">
                <button
                  onClick={handlePlaceOrder}
                  className="hover:bg-[#367f44] w-[131px] bg-[#46A358] text-white text-[15px] font-bold h-[45px] rounded-[3px] border border-[#EAEAEA] flex items-center justify-center"
                >
                  Change
                </button>
                <button className=" w-[131px]  text-[#3D3D3D] text-[15px] font-normal hover:font-bold h-[45px]  flex items-center justify-center">
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
        {/* --------------------------------------------------- */}
        <div className="flex items-start border border-black   gap-[28px]"></div>
        {activeTab === "reviews" && (
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
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
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
                className="  text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3] option-custom"
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
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
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
                className=" text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3] option-custom"
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
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <button
              onClick={handlePlaceOrder}
              className="hover:bg-[#367f44] w-[131px] bg-[#46A358] text-white text-[15px] font-bold h-[45px] rounded-[3px] border border-[#EAEAEA] flex items-center justify-center"
            >
              Save Address
            </button>
            <p className="text-[#3D3D3D] text-[17px] font-medium mt-[74px] mb-[11px]">
              Shipping Address
            </p>
            <p className="text-[#727272] text-[14px] font-normal">
              You have not set up this type of address yet.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
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
                className="text-[#A5A5A5] pl-[13px] text-[14px]  w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
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
                className=" text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3] option-custom"
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
                className="text-[#A5A5A5] pl-[13px] text-[14px]  w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
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
                className="text-[#A5A5A5] pl-[13px] text-[14px] w-[417px] h-[40px] outline-none rounded-[3px] border border-[#d3d3d3]"
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
              <div className="flex items-center mt-[150px] justify-end">
                <div className="  w-[240px] flex items-center gap-[7px]">
                  <input type="checkbox" class="checkbox-round" />
                  <p className="text-[#3D3D3D] font-medium text-[15px]">
                    Ship to a different address?
                  </p>
                </div>
                <p className="mr-[10px] text-[#46A358] font-medium text-[16px] hover:cursor-pointer">
                  Add
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
