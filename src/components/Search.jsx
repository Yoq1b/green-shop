import { useContext, useState } from "react";
// import { useDispatch } from "react-redux";
import { Data } from "../db/data";
import { IoCloseSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { AboutContext, ProductContext, ShopContext } from "../App";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Search = ({ handleClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(Data.slice(0, 20));
  const [clickedItems, setClickedItems] = useState([]);
  const { product, setProduct } = useContext(ProductContext);
  const { about, setAbout } = useContext(AboutContext);
  const { shop, setShop } = useContext(ShopContext);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterData(query);
  };

  const filterData = (query) => {
    const filtered = Data.filter((item) =>
      item.common_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered.slice(0, 20));
  };

  const handleBasketClick = (itemId) => {
    if (!product.includes(itemId)) {
      setProduct([...product, itemId]);
      setClickedItems([...clickedItems, itemId]);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-40">
      <div className="w-[700px] h-[700px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-end p-2">
          <IoCloseSharp
            onClick={handleClose}
            className="w-8 h-8 hover:text-red-500 hover:scale-110  hover:rotate-90 duration-300 cursor-pointer"
          />
        </div>
        <input
          type="text"
          className="w-full p-4 pl-[30px]  border-gray-200 focus:outline-none"
          placeholder="Search product..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className=" flex px-[10px] pb-[30px]  h-[595px] overflow-y-scroll items-start pt-[10px] justify-between flex-wrap  ">
          {filteredData.map((item) => (
            <Link
              to="/shop"
              key={item.id}
              onClick={() => handleItemClick(item.id)}
            >
              <NavLink to="/shop">
                <div
                  key={item.id}
                  className="w-[220px] mb-[20px]  [box-shadow:_0px_2px_4px_0px,_rgba(14,_30,_37,_0.32)_0px_2px_16px_0px]  border-black cursor-pointer group relative duration-200"
                >
                  <NavLink to="/shop">
                    <img
                      onClick={() => {
                        setShop([item.id]);
                        handleClose();
                      }}
                      src={item.image_url}
                      alt="Flower"
                      className="  w-full h-[220px] mb-[12px] "
                    />
                  </NavLink>

                  <div className="bg-white relative">
                    <p className="ml-[10px] mb-[6px] text-[16px] text-[#3D3D3D] font-normal">
                      {item.common_name}
                    </p>
                    <h1 className="text-[#46A358] mb-[5px] ml-[10px] font-bold text-[18px]">
                      ${item.price}.00
                    </h1>
                    <FiShoppingCart
                      className={`w-6 h-6 absolute right-3 bottom-3 hover:text-[#46A358] hover:scale-110 duration-200 cursor-pointer ${
                        clickedItems.includes(item.id) ? "text-green-500" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleBasketClick(item.id);
                      }}
                    />
                  </div>
                </div>
              </NavLink>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
