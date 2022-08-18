import React from "react";

// Import MostWanted
import { mostWanted } from "../../../data";
import Lol from "./Lol";

const MostWanted = () => {
  return (
    <div className="section grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-6 lg:gap-4">
      <h2 className="text-green px-4 lg:px-0 text-[27px]">Lo más buscado</h2>
      {mostWanted.map((item) => {
        return <Lol item={item} key={item.id} />;
      })}
    </div>
  );
};

export default MostWanted;
