import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "../Backdrop/Backdrop";

const Cart = () => {
  const toysOnCart = useSelector((state) => state.data.cart);
  const backdrop = useSelector((state) => state.data.backdrop);

  return (
    <div>
      {backdrop && (
        <>
          <Backdrop />
          <div className="bg-white overflow-y-scroll overflow-auto section fixed right-0 bottom-0 top-24 px-3 index-10">
            {toysOnCart.length ? toysOnCart.map((item) => {
              return (
                <section className="p-5 flex">
                  <img className="w-[80px]" src={item.image}></img>
                  <div className="flex flex-col p-4">
                    <h4 className="text-tertiary">
                      {item.marca} {item.id}
                    </h4>
                    <span className="text-primary">
                      {item.name}
                    </span>
                    <h2 className="text-[22px]">${item.price}</h2>
                    
                  </div>
                </section>
              );
            })
            : <h2>No hay productos en el carrito</h2>}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
