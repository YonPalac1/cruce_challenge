import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Brands from "./components/Brands";
import Season from "./components/Season";
import ToyOfTheDay from "./components/ToyOfTheDay";
import MostWanted from "./components/MostWanted";
import Offer from "./components/Offer";
import Campaign from "./components/Campaign";
import Whatsapp from "./components/Whatsapp";

// Commons
import Benefits from "../../commons/Benefits/Benefits";
import MultiCarousel from "../../commons/Carousel/MultiCarousel";
import Buttons from "../../commons/Buttons/Buttons";
import TopBanner from "../../commons/Alert/TopBanner";
import Alert from "../../commons/Alert/Alert";
import Footer from "../../commons/Footer/Footer";

import { brands } from "../../data";

export const Home = () => {
  const newsToys = useSelector((state) => state.data.toys);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const toys = newsToys.filter((item) => item.news === "on");
    setNews(toys);
  }, []);

  return (
    <div className="bg-white">
      {/* Components Fixes */}
      <TopBanner />
      <Whatsapp />
      <Alert />

      <div className="lg:w-[1024px] mx-auto">
        <div className="hidden md:block">
          <Benefits />
        </div>
        <Season />
        <div className="block lg:hidden">
          <Buttons />
        </div>
        <Brands item={brands} title={"Nuestras marcas"} />
        <div className="lg:hidden">
          <Benefits />
        </div>
        <ToyOfTheDay />
        <MostWanted />
        <MultiCarousel item={news} title={"Novedades"} />
        <Campaign />
        <Offer />
        <MultiCarousel item={news} title={"Te recomendamos"} />
      </div>
      <Footer />
    </div>
  );
};
