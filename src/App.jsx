import React, {  useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Shop from "./pages/Shop";
const App = () => {
  const [Num, setNum] = useState(0);
  const color = [
    { btn: "bg-[#E5281A]", heading: "text-[#E5281A]", ribbon: "bg-[#E5281A]" },
    { btn: "bg-[#D4A017]", heading: "text-[#D4A017]", ribbon: "bg-[#D4A017]" },
    { btn: "bg-[#0EA5E9]", heading: "text-[#0EA5E9]", ribbon: "bg-[#0EA5E9]" },
  ];
  const banner = [
    "bg-[linear-gradient(105deg,#0A0A0A_0%,#0A0A0A_30%,#300e0c_30%,#1f0908_65%,#350f0e_65%,#200908_80%,#39100f_80%,#0A0A0A_90%,#0A0A0A_90%,#0A0A0A_100%)]",
    "bg-[linear-gradient(105deg,#0A0A0A_0%,#0A0A0A_30%,#3e2f07_30%,#241b04_65%,#3d2d07_65%,#271d04_80%,#171103_80%,#0A0A0A_90%,#0A0A0A_90%,#0A0A0A_100%)]",
    "bg-[linear-gradient(105deg,#0A0A0A_0%,#0A0A0A_30%,#02161e_30%,#01090d_65%,#02161e_65%,#01090d_80%,#02161e_80%,#0A0A0A_90%,#0A0A0A_90%,#0A0A0A_100%)]",
  ];


  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home Num={Num} setNum={setNum} color={color} banner={banner} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
