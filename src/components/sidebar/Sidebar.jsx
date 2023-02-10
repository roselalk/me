import { useState } from "react";
import ProfileCard from "./ProfileCard";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  //   const [count, setCount] = useState(0)

  return (
    <div className="sidebar">
      <ProfileCard />
      <div className="menu-items">
        {/* <MenuItem title="Home" />
        <MenuItem title="About Me" />
        <MenuItem title="What did I learn?" />
        <MenuItem title="Portfolio" />
        <MenuItem title="Contact" /> */}
        <Link to="/" className="menu-item menu-item__title">Home</Link>
        <Link className="menu-item menu-item__title" to="/about-me">About Me</Link>
        <Link className="menu-item menu-item__title" to="/learned">What did I learn?</Link>
        {/* <Link className="menu-item menu-item__title" to="/portfolio">Portfolio</Link>
        <Link className="menu-item menu-item__title" to="/contact">Contact</Link> */}
      </div>
    </div>
  );
}

export default Sidebar;
