import React, { useState, useEffect } from "react";

// import link
import { animateScroll as scroll } from "react-scroll";

import Top from "../../assets/utils/volver.png";

const GoTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <div className="w-full mt-5">
          <img
            onClick={() => scrollToTop()}
            className="mx-auto cursor-pointer"
            src={Top}
          ></img>
        </div>
      )
    );
  }
};

export default GoTop;
