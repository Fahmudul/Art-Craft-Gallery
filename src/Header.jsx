import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Header.css";
// import slider_1 from './assets/slider_1.jpg'
const Header = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="w-[90%] mx-auto mt-5 rounded-lg ">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        className="rounded-lg"

      >
      <div data-src="../src/assets/slider_1.jpg" className="rounded-lg bg-gradient-to-b from-black-opacity-30 to-black-opacity-90"/>
      <div data-src="../src/assets/slider_2.jpg" className="rounded-lg bg-gradient-to-b from-black-opacity-30 to-black-opacity-90"/>
      <div data-src="../src/assets/slider_3.jpg" className="rounded-lg bg-gradient-to-b from-black-opacity-30 to-black-opacity-90"/>
      <div data-src="../src/assets/slider_4.jpg" className="rounded-lg bg-gradient-to-b from-black-opacity-30 to-black-opacity-90"/>
      <div data-src="../src/assets/slider_5.jpg" className="rounded-lg bg-gradient-to-b from-black-opacity-30 to-black-opacity-90"/>
      <div data-src="../src/assets/slider_6.jpg" className="rounded-lg bg-gradient-to-b from-black-opacity-30 to-black-opacity-90"/>
      </AutoplaySlider>
    </div>
  );
};

export default Header;
