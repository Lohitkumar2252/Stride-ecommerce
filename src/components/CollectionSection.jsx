import React from "react";
import Card from "./Card";
import { useCart } from "../context/CartContext";

const CollectionSection = () => {
  const {
    state: { products },
  } = useCart();
  return (
    <section>
      <div className="container p-4 pt-10 sm:pt-20 sm:p-7vv">
        <p className="text-[#D01A10] uppercase tracking-widest text-sm">
          featured this season
        </p>
        <h2 className="text-[#888888] uppercase font-bold text-4xl sm:text-6xl tracking-wide">
          <span className="text-[#FAFAFA]">top</span> picks
        </h2>
        <div className="card_container grid grid-cols-1 sm:grid-cols-3 gap-5 mt-15">
          {products.filter(value => value.featured == true).map((value, i) => {
            return (
              <Card
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
          })}
        
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
