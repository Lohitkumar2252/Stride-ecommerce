import React, { useMemo, useState } from "react";
import Card from "../components/Card";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
const Shop = () => {
  const {
    state: { products },
  } = useCart();
  const [clicked, setclicked] = useState("All");
  const filterBtns = ["All", "Training", "Running", "Lifestyle"];
  const filteredProducts = useMemo(() => {
    if (clicked === "All") return products;
    return products.filter((product) => 
      product.category.toLowerCase().includes(clicked.toLowerCase()),
    );
  }, [clicked, products]);

  const handleClick = (value) => {
    setclicked(value);
  };
  return (
    <div className="container">
      <div className="top border-b border-b-[#1C1C1C] px-4 py-8 flex items-center justify-between">
        <h1 className="uppercase text-white font-extrabold mt-20 text-4xl tracking-wide sm:text-5xl lg:text-7xl">
          All <span className="text-[#E5281A]">Shoes</span>
        </h1>
        <Link to="/" className="self-end sm:hidden">
          <button
            className={`bg-[#E5281A] transition-colors duration-500 px-4 py-2 lg:px-6 border-none outline-none text-white font-bold uppercase tracking-wide  cursor-pointer`}
          >
            <img src="/left_arrow.svg" alt="img" className="w-4 lg:w-6" />
          </button>
        </Link>
      </div>
      <div className="products">
        <div className="filter p-4 gap-2 sm:gap-5 flex items-center">
          {filterBtns.map((value, i) => {
            return (
              <button key={i}
                onClick={() => handleClick(value)}
                className={`${clicked == value && "border-[#E5281A] border"} outline-none px-4 sm:px-5 py-2 capitalize bg-[#161616] font-light text-xs xl:text-base`}
              >
                {value}
              </button>
            );
          })}
        </div>
        <div className="products_container p-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {filteredProducts.map((value) => {
            return (
              <Card
                key={value.id}
                bgColor={value.bgColor}
                img={value.img}
                category={value.category}
                name={value.name}
                price={value.price}
                id={value.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
