import React, { useState } from "react";
import Options from "./Options";
import Range from "./Range";

const Accordion = ({ filters, icons, name }) => {
    const [showMenu, setShowMenu] = useState(false) 

    if(name === "Filtrar"){
      return (
        <div className="m-3 relative">
          <div onClick={() => setShowMenu(!showMenu)} 
          className={!showMenu ?
            "flex cursor-pointer items-center justify-between placeholder:italic text-primary block bg-white w-full py-2 pl-9 pr-3 shadow-sm sm:text-sm border border-slate-300 border border-slate-300 rounded-md md:border-none"  : 
            "flex cursor-pointer items-center justify-between placeholder:italic text-primary block bg-white w-full py-2 pl-9 pr-3 shadow-sm sm:text-sm border border-slate-300 rounded-md md:border-none"
          }>
            <b className="flex items-center m-2">{name}</b>
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
            "flex cursor-pointer items-center justify-between placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"  : 
            "flex cursor-pointer items-center justify-between placeholder:italic text-black block bg-white w-full border border-black rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
          }>
            <p className="flex items-center m-2">{name}</p>
            {icons}
          </div>
          { showMenu && <Options />
          }
        </div>
      );
    }
  
};

export default Accordion;
