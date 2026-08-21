import React from "react";
import HeroSection from "./HeroSection";
import CollectionSection from "./CollectionSection";
import AboutSection from "./AboutSection";


const Home = (props) => {
    



  return (
    <div>
      <HeroSection Num={props.Num} setNum={props.setNum} color={props.color} banner={props.banner}  handleScroll={props.handleScroll}/>
      <CollectionSection/>
      <AboutSection />
    </div>
  );
};

export default Home;
