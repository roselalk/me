import { useState, useContext } from "react";
import "./aboutMe.css";
import MobileContext from "../../context/mobile";

function AboutCard(props) {
  const [viewFront, setViewFront] = useState(true);
  const { mobile } = useContext(MobileContext)


  function handleMouseEnter() {
    setViewFront(false);
  }

  function handleMouseLeave() {
    setViewFront(true);
  }

  return (
    <div
      onMouseEnter={
        mobile
          ? () => {
              return false;
            }
          : handleMouseEnter
      }
      onMouseLeave={
        mobile
          ? () => {
              return false;
            }
          : handleMouseLeave
      }
      onTouchStart={
        mobile
          ? handleMouseEnter
          : () => {
              return false;
            }
      }
      onTouchEnd={
        mobile
          ? handleMouseLeave
          : () => {
              return false;
            }
      }
      className={mobile ? "about-card--mobile" : "about-card"}
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
            mobile ? "about-card--back--mobile" : "about-card--back"
          }
        >
          <img
            className={
              mobile ? "about-card__icon--mobile" : "about-card__icon"
            }
            src={props.icon}
            alt="cute icon vaguely representing the hobby/characteristic the card represents"
          />
          <div className="about-card__text-div">
            <h3
              className={
                mobile ? "about-card__title--mobile" : "about-card__title"
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
