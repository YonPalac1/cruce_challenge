import React from "react";

const Lol = ({ item }) => {
  return (
    <div className="flex md:flex-col">
      <img className="w-[50px]" src={item.image}></img>
      <span>{item.name}</span>
    </div>
  );
};

export default Lol;
