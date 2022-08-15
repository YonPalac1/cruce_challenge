import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Controls = () => {
  return (
    <div className="flex">
      <div className="border border-2 rounded-full p-3">
        <FiChevronLeft />
      </div>
      <div className="border border-2 rounded-full p-3">
        <FiChevronRight />
      </div>
    </div>
  );
};

export default Controls;
