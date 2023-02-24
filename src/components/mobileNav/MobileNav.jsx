import { useState, useEffect } from "react";
import me from "../../assets/me.png";
import "./mobile-nav.css";
import { Link } from "react-router-dom";

function MobileNav(props) {
  return (
    <div className="mobile-nav">
      <Link to="/">
        <img className="mobile-nav__picture" src={me} alt="" />
      </Link>
      <Link to="/menu">
        <div className="mobile-nav__hamburger">
          <div className="mobile-nav__hamburger-line"></div>
          <div className="mobile-nav__hamburger-line"></div>
          <div className="mobile-nav__hamburger-line"></div>
        </div>
      </Link>
    </div>
  );
}

export default MobileNav;
