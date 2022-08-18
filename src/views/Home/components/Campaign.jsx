import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Banner from "../../../assets/banners/banner.png";
import MultiCarousel from "../../../commons/Carousel/MultiCarousel";

const Campaign = () => {
  const campaign = useSelector((state) => state.data.campaign);

  useEffect(() => {}, []);

  return (
    <div className="section flex flex-col ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <img className="p-4 col-span-2 order-first w-full" src={Banner}></img>
        <div className="lg:order-1">
          <MultiCarousel item={campaign} />
        </div>
      </div>
    </div>
  )
}

export default Campaign