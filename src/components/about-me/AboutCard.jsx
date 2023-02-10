import { useState, useEffect } from "react";
import "./aboutMe.css";

function AboutCard(props) {
  const [viewFront, setViewFront] = useState(true);

  function handleMouseEnter() {
    console.log("Card flipped");
    setViewFront(false);
  }

  function handleMouseLeave() {
    console.log("Card flipped");
    setViewFront(true);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="about-card"
    >
      {viewFront && (
        <div className="about-card--front">
          <img
            className="about-card__img"
            src={props.img}
            alt="picture from my life befitting the hobby/characteristic the card represents"
          />
        </div>
      )}
      {!viewFront && (
        <div className="about-card--back">
          <img
            className="about-card__icon"
            src={props.icon}
            alt="cute icon vaguely representing the hobby/characteristic the card represents"
          />
          <div className="about-card__text-div">
            <h3 className="about-card__title">{props.title}</h3>
            <p className="about-card__text">
                {props.text}
              {/* This is where a bit of info about me will go, specific to the
              hobby/characteristic this card represents. This is where a bit of
              info about me will go, specific to the hobby/characteristic this
              card represents. This is where a bit of info about me will go,
              specific to the hobby/characteristic this card represents. This is
              where a bit of info about me will go, specific to the
              hobby/characteristic this card represents. This is where a bit of
              info about me will go, specific to the hobby/characteristic this
              card represents. */}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutCard;
