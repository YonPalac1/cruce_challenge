import React, { useState } from "react";
import Options from "./Options";
import Range from "./Range";

const Accordion = ({ icons, name }) => {
    const [showMenu, setShowMenu] = useState(false);

    if(name === "Filtrar"){
      return (
        <div className="m-3 relative md:w-[300px] ">
          <div onClick={() => setShowMenu(!showMenu)} 
          className={!showMenu ?
            "relative flex cursor-pointer items-center md:justify-center index-0  text-primary  bg-white w-full py-2 pl-9 pr-3 shadow-sm sm:text-sm border  border-slate-300 rounded-md md:border-none" : 
            "relative flex cursor-pointer items-center md:justify-center z-1 text-primary  bg-white w-full py-2 pl-9 pr-3 shadow-sm sm:text-sm border border-slate-300 rounded-md md:border-none index-0"
          }>
            <b className="m-2">{name}</b>
            {icons}
          </div>
          { 
            showMenu && <Range />
          }
        </div>
      );
    }

    if(name === "Ordenar por"){
      return (
        <div className="m-3 relative">
          <div onClick={() => setShowMenu(!showMenu)} 
          className={!showMenu ?
            "relative flex index-0 cursor-pointer items-center justify-between placeholder:italic placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"  : 
            "relative flex index-0 cursor-pointer items-center justify-between placeholder:italic text-black bg-white w-full border border-black rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
          }>
            <p className="flex items-center m-2">{name}</p>
            {icons}
          </div>
          { showMenu && <Options /> }
        </div>
      );
    }
  
};

export default Accordion;
