import React from "react";

import { SocialsData } from "../../data";
import SendEmail from "./SendEmail";

const Socials = () => {
  return (
    <div className="columns-2 lg:columns-3 flex justify-between px-5 section text-[20px]">
      <div>
        {SocialsData.map((item) => {
          return (
            <div className="flex items-center text-secondary" key={item.id}>
              <h3 className="text-secondary mr-3">{item.name}</h3>
              <span className="text-primary">{item.icon}</span>
            </div>
          );
        })}
      </div>
      <div >
        <h3 className="text-secondary">Preguntas Frec.</h3>
        <h3 className="text-secondary">Term & COND</h3>
        <h3 className="text-secondary">Mis pedidos</h3>
      </div>
      <div className="hidden lg:block">
        <SendEmail />
      </div>
    </div>
  );
};

export default Socials;
