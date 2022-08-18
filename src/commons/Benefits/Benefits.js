import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { benefits } from "../../data";

const Benefits = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1030 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 30 
    },
    tablet: {
      breakpoint: { max: 1030, min: 570 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter: 30 
    },
    mobile: {
      breakpoint: { max: 569, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30 
    },
  };
  return (
    <div className="section mx-auto items-center lg:w-[1024px] text-primary z-10 transition-all duration-300 bg-white">
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={false}
        swipeable={true}
        draggable={true}
        infinite={true}
        slidesToSlide={1}
        containerClass="carousel-container"
      >
      {benefits.map((item) => {
        return (
          <div className="flex justify-center" key={item.id}>
            <div className="text-[36px] text-green mr-3">{item.icon}</div>
            <div className="flex-col">
              <h2 className="text-primary">{item.h2}</h2>
              <h4 className="text-red -leading-3">{item.red}</h4>
            </div>
          </div>
        );
      })}
      </Carousel>
    </div>
  );
};

export default Benefits;
