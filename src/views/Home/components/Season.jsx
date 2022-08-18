import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Producto from "../../../commons/Productos/Producto";
import Buttons from "../../../commons/Buttons/Buttons";

const Season = () => {
  const seasonToys = useSelector((state) => state.data.toys);
  const [season, setSeason] = useState([]);

  useEffect(() => {
    const toys = seasonToys.filter((item) => item.season === 1);
    setSeason(toys);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mt-24 md:grid-cols-4 lg:grid-cols-4 lg:gap-4">
      <div className="col-start-1 -mt-5 col-end-3 md:col-start-1 md:col-end-5 lg:col-span-2 flex flex-col text-primary">
        <h1 className="leading-[56px] text-[56px] mb-5 md:leading-[56px]">
          LLegó el invierno, encontralos antes que nadie
        </h1>
        <span className="text-[22px] text-secondary mb-24 lg:mb-0">
          La colección mas completa de Game of Thrones está en X
        </span>

        <div className="col-start-1 col-end-3 hidden lg:block">
          <Buttons />
        </div>
      </div>
      {season.map((item) => {
         if (item.id % 2 === 0) {
          return <Producto item={item} grid={"col-span-1 -mt-20"} key={item.id} />;
        } else {
          return <Producto item={item} grid={"col-span-1"} key={item.id} />;
        }
      })}
    </div>
  );
};

export default Season;
