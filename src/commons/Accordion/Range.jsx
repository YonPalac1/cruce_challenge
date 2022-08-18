import React from "react";

const Range = () => {
  return (
    <div className="absolute bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm z-10">
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>Max</label>
          <input className="border border-slate-300 w-[100%] rounded-md" type="number"></input>
        </div>

        <div className="flex flex-col">
          <label>Min</label>
          <input className="border border-slate-300 w-[100%] rounded-md" type="number"></input>
        </div>
      </div>
      <div className="mt-5">
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
          <input type="range" className="range-min" min="0" max="10000" value="2500"></input>

          <input type="range" className="range-min" min="0" max="10000" value="7500"></input>
        </div>
      </div>
    </div>
  );
};

export default Range;
