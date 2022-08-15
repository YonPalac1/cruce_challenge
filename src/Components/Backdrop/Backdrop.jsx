import React from "react";
import { useDispatch } from "react-redux";
import { backdropReducer } from "../../redux/dataReducer";

const Backdrop = () => {
  const dispatch = useDispatch();
  const closeBackdrop = () => {
    dispatch(backdropReducer(false));
  };

  return (
    <>
        <div
          onClick={closeBackdrop}
          className="fixed w-full h-full z-8 bg-rgba"
        ></div>
    </>
  );
};

export default Backdrop;
