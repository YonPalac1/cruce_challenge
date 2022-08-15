import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCartReducer, detailsToysReducer } from "../../redux/dataReducer";
import Offer from "../Offer/Offer";

// import icons
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Producto = ({ item, grid, img }) => {
  const dispatch = useDispatch();

  const watchDetails = (data) => {
    dispatch(detailsToysReducer(data))
  }

  const addProductToCart = (product) => {
    dispatch(addProductToCartReducer(product));
  };

  return (
    <div className={grid}>
      <div className="relative z-8">
      <Link onClick={() => watchDetails(item)} to='/details'>
        <img src={item.image} />
        { item.offer &&
        <Offer />
        }
      </Link>
      </div>
      <div className="flex flex-col p-4">
        <h4 className="text-tertiary">
          {item.marca} {item.id}
        </h4>
        <span className="text-primary">
          {item.name} - {item.text}
        </span>
        <b>6 Cuotas s/interes de</b>
        <h2 className="text-[22px]">${item.price}</h2>
        {item.final && (
          <p className="text-secondary">
            Final: <span className="line-through ">${item.price}</span>
          </p>
        )}
        {item.final && <h2 className="text-red">${item.final}</h2>}
        <div
          onClick={() => addProductToCart(item)}
          className="rounded-md border-solid border-2 cursor-pointer  border-green text-green p-4 w-[60px]"
        >
          <ShoppingCartIcon className="w-[26px] h-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default Producto;
