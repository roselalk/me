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
      onMouseEnter={
        props.mobile
          ? () => {
              return false;
            }
          : handleMouseEnter
      }
      onMouseLeave={
        props.mobile
          ? () => {
              return false;
            }
          : handleMouseLeave
      }
      onTouchStart={
        props.mobile
          ? handleMouseEnter
          : () => {
              return false;
            }
      }
      onTouchEnd={
        props.mobile
          ? handleMouseLeave
          : () => {
              return false;
            }
      }
      className={props.mobile ? "about-card--mobile" : "about-card"}
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
        <div
          className={
            props.mobile ? "about-card--back--mobile" : "about-card--back"
          }
        >
          <img
            className={
              props.mobile ? "about-card__icon--mobile" : "about-card__icon"
            }
            src={props.icon}
            alt="cute icon vaguely representing the hobby/characteristic the card represents"
          />
          <div className="about-card__text-div">
            <h3
              className={
                props.mobile ? "about-card__title--mobile" : "about-card__title"
              }
            >
              {props.title}
            </h3>
            <p className="about-card__text">{props.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutCard;
