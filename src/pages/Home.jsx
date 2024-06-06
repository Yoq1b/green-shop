import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import Duality from "../components/Duality";
import Carousel from "../components/Carousel";
import Home_cards from "../components/Home_cards";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="w-full relative">
        <Carousel />
        <Home_cards />
        <Duality />
        <Posts />
      </div>
    </>
  );
};

export default Home;
