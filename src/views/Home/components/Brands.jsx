import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Controls from "../../../Components/Controls/Controls";

const Brands = ({ item, title }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1030 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1030, min: 570 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 569, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="section">
      <h2 className="text-[27px] text-center lg:text-left text-tertiary">
        {title}
      </h2>
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
        {item.map((item) => {
          return (
            <div className="flex justify-center" key={item.id}>
              <img src={item.image}></img>
            </div>
          );
        })}
      </Carousel>
      <Controls />
    </div>
  );
};

export default Brands;
