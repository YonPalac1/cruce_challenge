import React, { useState } from "react";
// Import font icon

// Import Bg
import AlertIcon from "../../assets/utils/bg.png";
// Import DAta
import { AlertData } from "../../data";

const Alert = () => {
  const [alertData, setAlertData] = useState(AlertData.show);

  return (
    <div className="fixed bottom-5 left-5 z-10 text-center flex justify-center items-center">
      {alertData && (
        <>
          <button onClick={() => setAlertData(false)} className="absolute right-0 top-0 bg-white border border-2 rounded-full w-[28px] h-[28px]">
            X
          </button>
          <h2 className="absolute">{AlertData.text}</h2>
          <img src={AlertIcon}></img>
        </>
      )}
    </div>
  );
};

export default Alert;
