import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import Accordion from "../../../commons/Accordion/Accordion";

const Filters = () => {
  const location = useLocation().pathname;

  const values = [
    {
      place: " Inicio / ",
      color: location === "/" ? "text-primary text-[18px]" : "text-secondary",
    },
    {
      place: " Juguetes / ",
      color: location === "/toys" ? "text-primary text-[18px]" : "text-secondary",
    },
    {
      place: " Funko",
      color: location === "/listado-coleccionables" ? "text-primary text-[18px]" : "text-secondary",
    },
  ];

  return (
    <div className="block md:flex md:justify-between items-center">
      <div className="hidden md:block">
      <ul className="flex">
        {values.map((value, i) => {
          return (
            <li className={`${value.color} mt-2`} key={i}>
              {value.place}
            </li>
          );
        })}
      </ul>
      </div>
      <Accordion
        icons={<FiChevronRight />}
        name={"Filtrar"}
      />
      <Accordion
        icons={<FiChevronRight />}
        name={"Ordenar por"}
      />
    </div>
  );
};

export default Filters;
