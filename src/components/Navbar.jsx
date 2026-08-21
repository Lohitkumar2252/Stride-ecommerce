import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router";

const Navbar = () => {
  const {
    state: { cart },
  } = useCart();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="border-b border-b-[#2e2e2e] w-full bg-[#0A0A0A] fixed top-0 z-10">
      <div className="flex justify-between px-6 h-15 items-center container">
        <div className="logo uppercase font-bold text-white text-[1.8rem]">
          <span className={`text-[#E5281A]`}>S</span>tride
        </div>

        <div className="nav-right flex items-center justify-center gap-5">
          {isHomePage ? (
            <Link to="/shop">
              <button
                className={`bg-[#E5281A] transition-colors duration-500 px-8 h-9 border-none outline-none text-white font-bold uppercase tracking-wide cursor-pointer hidden sm:block`}
              >
                shop now
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button
                className={`bg-[#E5281A] transition-colors duration-500 px-8 h-9 border-none outline-none text-white font-bold uppercase tracking-wide cursor-pointer hidden sm:block`}
              >
                home
              </button>
            </Link>
          )}

          <Link to="/cart">
            <div className="cartIcon w-8 h-8 p-1 relative">
              <img src="/cart_icon.svg" alt="cart" className="w-full" />
              <div className="number absolute -bottom-1  -left-1 bg-[#E5281A] rounded-full w-5 h-5 grid place-items-center text-sm font-bold">
                {cart.reduce((sum, i) => sum + i.qty, 0)}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
