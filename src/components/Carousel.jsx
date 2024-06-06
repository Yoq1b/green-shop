import { useEffect, useState, useRef } from "react";
import Better from "../../public/assets/better.png";

const Carousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [transition, setTransition] = useState("transform 1s ease-in-out");
  const slideCount = 3;
  const slideWidth = 100 / slideCount;
  const isTransitioning = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev + slideWidth);
      isTransitioning.current = true;
    }, 4000);

    return () => clearInterval(interval);
  }, [slideWidth]);

  useEffect(() => {
    if (translateX >= 100) {
      setTimeout(() => {
        setTransition("none");
        setTranslateX(0);
        setTimeout(() => {
          setTransition("transform 1s ease-in-out");
        }, 50);
        isTransitioning.current = false;
      }, 1000);
    }
  }, [translateX]);

  const handleDotClick = (index) => {
    setTransition("transform 1s ease-in-out");
    setTranslateX(index * slideWidth);
    isTransitioning.current = true;
  };

  return (
    <div className="bg-[#fafafa] mt-[80px]   px-7 relative overflow-hidden">
      <div className="relative">
        <div
          className="flex transition-transform"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${translateX}%)`,
            transition: transition,
          }}
        >
          {[...Array(slideCount)].map((_, index) => (
            <div key={index} className="flex w-full">
              <div className="p-10 w-[60%]">
                <h1 className="opacity-85 font-medium">Welcome to GreenShop</h1>
                <h1 className="text-[70px] font-extrabold">
                  Lets Make A Better{" "}
                  <span className="text-[#46A358]">Planet</span>
                </h1>
                <p className="opacity-65">
                  We are an online plant shop offering a wide range of cheap and
                  <br />
                  trendy plants. Use our plants to create an unique Urban
                  Jungle.
                  <br />
                  Order your favorite plants!
                </p>
                <button className="px-7 py-2 bg-[#46A358] rounded-lg font-medium mt-4 text-white">
                  SHOP NOW
                </button>
              </div>
              <div className="flex items-end w-[40%]">
                <img
                  src={Better}
                  alt="img"
                  className="w-28 h-28 absolute bottom-8"
                />
                <img src={Better} alt="img" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(slideCount)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer w-3 h-3 rounded-full ${
                translateX === index * slideWidth
                  ? "bg-[#46A358]"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
