import { useState, useEffect } from "react";
import "./mobile-menu.css";
import MobileProfileCard from "./MobileProfileCard";
import { Link } from "react-router-dom";

function MobileMenu(props) {
  //gebruik van UseEffect(), omdat anders setState elke keer wordt uitgevoerd dat de component gerendered wordt, en dat geeft de error
  //Warning: Cannot update a component (`App`) while rendering a different component (`MobileMenu`). To locate the bad setState() call
  //inside `MobileMenu`
  useEffect(() => {
    props.showNav(false);
  }, []);

  return (
    <div className="mobile-menu">
      <Link to={-1} onClick={() => props.showNav(true)}>
        <div className="mobile__x">
          <div className="mobile__x-line mobile__x-line-left"></div>
          <div className="mobile__x-line mobile__x-line-right"></div>
        </div>
      </Link>

      <MobileProfileCard language={props.language} />
      <div className="mobile-menu-items">
        <Link to="/" className="menu-item menu-item__title" onClick={() => props.showNav(true)}>
          {props.language === "English" && <p>Home</p>}
          {props.language === "Nederlands" && <p>Home</p>}
          {props.language === "Korean" && <p>홈</p>}
        </Link>
        <Link className="menu-item menu-item__title" to="/about-me" onClick={() => props.showNav(true)}>
          {props.language === "English" && <p>About me</p>}
          {props.language === "Nederlands" && <p>Wie ben ik?</p>}
          {props.language === "Korean" && <p>나에 대해서</p>}
        </Link>
        <Link className="menu-item menu-item__title" to="/learned" onClick={() => props.showNav(true)}>
          {props.language === "English" && <p>What did I learn?</p>}
          {props.language === "Nederlands" && <p>Wat heb ik geleerd?</p>}
          {props.language === "Korean" && <p>내가 배운 것에 대해서</p>}
        </Link>
      </div>
      <div className="mobile-languages">
        <p
          className="language-option"
          onClick={() => props.handleClick("Nederlands")}
        >
          Nederlands
        </p>
        <p>|</p>
        <p
          className="language-option"
          onClick={() => props.handleClick("English")}
        >
          English
        </p>
        <p>|</p>
        <p
          className="language-option"
          onClick={() => props.handleClick("Korean")}
        >
          한국어
        </p>
      </div>
    </div>
  );
}

export default MobileMenu;
