import SkillCard from "./skillCard";
import "./image-slider.css";
import { useState } from "react";
import JS from "../assets/js.jpg";
import React from "../assets/react.jpg";
import Angular from "../assets/angular.png";
import TS from "../assets/ts.png";
import arrow from "../assets/arrow.png"

function ImageSlider() {
  const [visibleCard, setVisibleCard] = useState(1);

  function goNext() {
    if (visibleCard === 4) {
      setVisibleCard(1);
    } else {
      setVisibleCard(visibleCard + 1);
    }
  }

  function goPrev() {
    if (visibleCard === 1) {
      setVisibleCard(4);
    } else {
      setVisibleCard(visibleCard - 1);
    }
  }

  return (
    <div className="portrait-div">
      {/* <div className="wide-div"> */}
      <div className="prev-button arrow-button" onClick={goPrev}>
        <img className="prev-arrow" src={arrow} alt="" />
      </div>
      <div className="portrait--skill-card">
        {visibleCard === 1 && (
          <SkillCard key={1} image={JS} visible={visibleCard === 1}></SkillCard>
        )}
        {visibleCard === 2 && (
          <SkillCard
            key={2}
            image={React}
            visible={visibleCard === 2}
          ></SkillCard>
        )}
        {visibleCard === 3 && (
          <SkillCard
            key={3}
            image={Angular}
            visible={visibleCard === 3}
          ></SkillCard>
        )}
        {visibleCard === 4 && (
          <SkillCard key={4} image={TS} visible={visibleCard === 4}></SkillCard>
        )}
      </div>
      <div className="next-button arrow-button" onClick={goNext}>
        <img src={arrow} alt="" />
      </div>
      {/* </div> */}
    </div>
  );
}

export default ImageSlider;
