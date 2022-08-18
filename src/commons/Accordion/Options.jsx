import React from "react";
import { useDispatch } from "react-redux";
import {
  orderLowerPriceReducer,
  orderTopPriceReducer,
} from "../../redux/dataReducer";

const Options = () => {
  const dispatch = useDispatch();

  const handlerLowerPrice = () => {
    dispatch(orderLowerPriceReducer());
  };
  const handlerTopPrice = () => {
    dispatch(orderTopPriceReducer());
  };

  return (
    <div className="absolute bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm z-10">
      <ul>
        <li
          onClick={handlerLowerPrice}
          className="cursor-pointer hover:border hover:border-sky-300"
        >
          Menor precio
        </li>
        <li
          onClick={handlerTopPrice}
          className="cursor-pointer hover:border hover:border-sky-300"
        >
          Mayor precio
        </li>
      </ul>
    </div>
  );
};

export default Options;
