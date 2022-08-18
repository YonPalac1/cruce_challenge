import React from "react";
import { add } from "date-fns";

import CountdownTimer from "./CountdownTimer";
import Lol from "./Lol";

// Import MostWanted
import { mostWanted } from "../../../data";

const futureDate = add(new Date(), {
  days: 6,
  hours: 22,
  minutes: 40,
});

const Offer = () => {
  return (
    <div className="py-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
      <CountdownTimer futureDate={futureDate} />
      {mostWanted.map((item) => {
        return <Lol item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Offer;
