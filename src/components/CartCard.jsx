import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartCard = ({ bgColor, img, category, price, name, id, qty }) => {
  const { dispatch } = useCart();
  const totalPrice = price * qty;
  return (
    <div className="p-2 sm:py-2 sm:px-4 bg-[#141414] border border-white/8 rounded-2xl flex items-center gap-3">
      <div className={`left w-20 sm:w-25 lg:w-30 xl:w-40 ${bgColor}`}>
        <img src={img} alt={name} className="w-full object-contain h-full" />
      </div>
      <div className="right flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <p className="text-[#D01A10] uppercase tracking-widest text-xs">
            {category}
          </p>
          <h3 className="text-[#FAFAFA] uppercase font-bold text-base lg:text-xl xl:text-2xl tracking-wide">
            {name}
          </h3>
          <div className="qty flex gap-4">
            <button
              aria-label="Decrease quantity"
              className="minus w-5 h-5 hover:bg-[#2c2c2c83] rounded-full"
              onClick={() => {
                dispatch({
                  type: "DECREASE_QTY",
                  payload: { id },
                });
              }}
            >
              <img
                src="/minusIcon.svg"
                alt="substract"
                className="w-full h-full object-contain"
              />
            </button>
            <div className="">{qty}</div>
            <button
              onClick={() => {
                dispatch({
                  type: "INCREASE_QTY",
                  payload: { id },
                });
              }}
              aria-label="Increase quantity"
              className="plus w-5 h-5 hover:bg-[#2c2c2c83] rounded-full"
            >
              <img
                src="/plusIcon.svg"
                alt="add"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>
        <div className=" flex flex-col">
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: id,
              });
            }}
            aria-label="Remove from cart"
            className="p-2 rounded-full ml-auto hover:bg-[#2c2c2c83]"
          >
            <img src="/crossIcon.svg" alt="remove" className="w-5" />
          </button>
          <p className="text-[#c6c6c6] tracking-wider text-base xl:text-xl">
            {`₹${totalPrice.toLocaleString()}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
