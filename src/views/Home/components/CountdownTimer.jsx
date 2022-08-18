import React from "react";
import { useTicker } from "../../../hooks/useTicker";
import CountdownTimerUtils from "./utils/CountdownTimerUtils";

const CountdownTimer = ({ futureDate }) => {
  const { days, hours, minutes, seconds } = useTicker(futureDate);

  return (
    <div className="p-5">
      <h2 className="text-secondary lg:text-[30px]">Termina en:</h2>
      <h1 className="text-red flex text-[30px]">
        <CountdownTimerUtils value={days} />
        :
        <CountdownTimerUtils value={hours} />
        :
        <CountdownTimerUtils value={minutes} />
        :
        <CountdownTimerUtils value={seconds} />
      </h1>
    </div>
  );
};

export default CountdownTimer;
