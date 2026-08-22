import React, { useEffect } from "react";

const PopUp = ({ setVisible }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setVisible]);
  return (
    <div className=" backdrop-blur-xs border border-white/8 text-center absolute right-5 -top-10 animate-[slideIn_0.5s_ease-in-out] after:content-[''] after:block after:h-1 after:w-0   after:bg-red-500 after:animate-[timer_3s_ease-in-out] overflow-hidden rounded-2xl">
      <h4 className="capitalize p-5">Order placed successfully</h4>
    </div>
  );
};

export default PopUp;
