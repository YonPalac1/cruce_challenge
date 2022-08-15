import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Benefits from "../../Components/Benefits/Benefits";
import Brands from "./components/Brands";
import ToyOfTheDay from "./components/ToyOfTheDay";
import MostWanted from "./components/MostWanted";
import Offer from "./components/Offer";
import Campaign from "./components/Campaign";

import Season from "../../Components/Season/Season";
import MultiCarousel from "../../Components/Carousel/MultiCarousel";
import Buttons from "../../Components/Buttons/Buttons";
import TopBanner from "../../Components/Alert/TopBanner";
import Whatsapp from "./components/Whatsapp";
import Alert from "../../Components/Alert/Alert";

import { brands } from "../../data";
import Footer from "../../Components/Footer/Footer";

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
