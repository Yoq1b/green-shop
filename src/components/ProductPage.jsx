import React, { useState } from "react";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full">
      <div className="flex items-center gap-[20px] border-b border-gray-300 mb-[20px]">
        <p
          className={`text-[18px]  w-[180px] h-[40px] cursor-pointer ${
            activeTab === "description"
              ? "text-[#46A358] font-bold  border-b-[3px] border-b-[#46A358]"
              : "text-[#3D3D3D] font-normal"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Product Description
        </p>
        <p
          className={`text-[18px]  w-[110px]  h-[40px] cursor-pointer ${
            activeTab === "reviews"
              ? "text-[#46A358] font-bold border-b-[3px] border-b-[#46A358]"
              : "text-[#3D3D3D] font-normal"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (19)
        </p>
      </div>

      {activeTab === "description" && (
        <div className="h-[430px] ">
          <p className="text-[#727272] text-[14px] font-normal">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your <br /> plants off the
            ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus <br /> quis justo gravida
            semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
            nulla. <br />
            <br />
          </p>
          <p className="text-[#727272] text-[14px] font-normal">
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, <br /> purus eget
            sagittis vulputate, sapien libero hendrerit est, sed commodo augue
            nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed tempor, lorem et placerat <br /> vestibulum, metus nisi posuere
            nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et
            blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
            imperdiet ligula euismod <br /> eget. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
            <br />
            <br />
          </p>
          <p className="text-[#3D3D3D] font-bold text-[14px]">Living Room:</p>
          <p className="text-[#727272] text-[14px] font-normal">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your <br /> plants off the
            ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br />
            <br />
          </p>
          <p className="text-[#3D3D3D] font-bold text-[14px]">Dining Room:</p>
          <p className="text-[#727272] text-[14px] font-normal">
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every <br /> room of your
            home with houseplants and their restorative qualities will improve
            your life. <br />
            <br />
          </p>
          <p className="text-[#3D3D3D] font-bold text-[14px]">Office:</p>
          <p className="text-[#727272] text-[14px] font-normal">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your <br /> plants off the
            ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br />
            <br />
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="h-[430px]">
          <p className="text-[#727272] text-[14px] font-normal">
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, <br /> purus eget
            sagittis vulputate, sapien libero hendrerit est, sed commodo augue
            nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere
            nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et
            blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
            imperdiet ligula euismod <br /> eget. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
            <br />
            <br />
          </p>
          <p className="text-[#3D3D3D] font-bold text-[14px]">Living Room:</p>
          <p className="text-[#727272] text-[14px] font-normal">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your <br /> plants off the
            ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br />
            <br />
          </p>
          <p className="text-[#3D3D3D] font-bold text-[14px]">Office:</p>
          <p className="text-[#727272] text-[14px] font-normal">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your <br /> plants off the
            ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br />
            <br />
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
