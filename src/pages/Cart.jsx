import React, {  useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import CartCard from "../components/CartCard";
import PopUp from "../components/PopUp";

const Cart = () => {
  const [Visible, setVisible] = useState(false);

  const {
    state: { cart },
    dispatch,
  } = useCart();


  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const calculateShipping = () => {
    if (subtotal === 0) {
      return 0;
    }
    return subtotal > 30000 ? 0 : 299;
  };
  const shipping = calculateShipping();

  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <div className="container overflow-x-hidden">
      <div className="top border-b border-b-[#1C1C1C] flex items-center justify-between mt-15 p-5">
        <h1 className="text-[50px] lg:text-[80px] uppercase font-black  tracking-wider ">
          <span className="text-[#E5281A]">c</span>art
        </h1>
        <Link to="/" className="self-end sm:hidden">
          <button
            className={`bg-[#E5281A] transition-colors duration-500 px-4 py-2 lg:px-6 border-none outline-none text-white font-bold uppercase tracking-wide  cursor-pointer`}
          >
            <img src="/left_arrow.svg" alt="img" className="w-4 lg:w-6" />
          </button>
        </Link>
      </div>
      <div className="container flex flex-col sm:flex-row justify-between py-6 px-4 gap-10">
        <div className="items_container w-full sm:w-1/2 flex flex-col gap-5 ">
          {cart.length === 0 ? (
            <div className="cartEmptyMsg border flex flex-col items-center gap-3 py-4 lg:py-8 bg-[#141414] border-white/8 ">
              <h3 className="capitalize font-medium tracking-wide text-[#9e9e9ea8] lg:text-lg">
                cart is empty, add items
              </h3>
              <Link to="/shop">
                <button
                  className={`bg-[#E5281A] transition-colors duration-500 px-8 h-9 border-none outline-none text-white font-bold uppercase tracking-wide cursor-pointer `}
                >
                  shop now
                </button>
              </Link>
            </div>
          ) : (
            cart.map((value) => {
              return (
                <CartCard
                  key={value.id}
                  bgColor={value.bgColor}
                  img={value.img}
                  category={value.category}
                  name={value.name}
                  price={value.price}
                  id={value.id}
                  qty={value.qty}
                />
              );
            })
          )}
        </div>
        <div className="order_summary w-full sm:w-1/2 flex items-center justify-center relative">
          <div className="bg-[#141414] border border-white/8 rounded-2xl w-full lg:w-100 p-5 ">
            <p className="text-[11px] font-medium tracking-widest text-gray-400 uppercase mb-4">
              Order summary
            </p>

            <div className="flex justify-between mb-2.5 text-sm">
              <span className="text-gray-400">
                Subtotal ( {cart.reduce((sum, i) => sum + i.qty, 0)} items)
              </span>
              <span className="text-[#969696]">
                ₹{subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between mb-2.5 text-sm">
              <span className="text-gray-400">Shipping</span>
              <span
                className={shipping === 0 ? "text-green-500" : "text-[#969696]"}
              >
                {shipping === 0 ? "₹0" : `₹${shipping.toLocaleString()}`}
              </span>
            </div>
            <div className="flex justify-between mb-4 text-sm">
              <span className="text-gray-400">Estimated tax</span>
              <span className="text-[#969696]">₹{tax.toLocaleString()}</span>
            </div>

            <div className="border-t border-white/8 pt-3.5 flex justify-between mb-4">
              <span className="text-base font-medium text-white">Total</span>
              <span className="text-lg font-medium text-white">
                ₹{total.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => {
                dispatch({
                  type: "CLEAR_CART",
                });
                setVisible(true);
              }}
              disabled={Visible}
              className={` w-full h-11.5 bg-[#D01A10] rounded-[10px] text-white text-sm font-medium tracking-wide uppercase`}
            >
              {Visible ? "Processing..." : "Checkout"}
            </button>
          </div>
          {Visible && <PopUp setVisible={setVisible} />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
