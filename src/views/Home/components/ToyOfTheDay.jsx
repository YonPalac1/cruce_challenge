import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Video from "../../../assets/banners/miniatura.png";

import Producto from "../../../commons/Productos/Producto";

const ToyOfTheDay = () => {
  const seasonToys = useSelector((state) => state.data.toys);
  const [day, setDay] = useState([]);

  useEffect(() => {
    const toys = seasonToys.filter((item) => item.day === "on");
    setDay(toys);
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-orange text-[43px] ml-4 lg:col-span-2">Juguete del dia</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <img
          className="p-4 col-span-2 order-first md:order-last w-full"
          src={Video}
        />
        <div className="lg:order-1">
          {day.map((item) => {
            return (
              <Producto
                item={item}
                grid={"grid grid-cols-2 gap-4 lg:flex lg:flex-col"}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToyOfTheDay;
