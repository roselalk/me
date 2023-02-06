import { useState } from "react";
import MenuItem from "./MenuItems";
import ProfileCard from "./ProfileCard";
import "./sidebar.css";

function Sidebar() {
  //   const [count, setCount] = useState(0)

  return (
    <div className="sidebar">
      <ProfileCard />
      <div className="menu-items">
        <MenuItem title="Home" />
        <MenuItem title="About Me" />
        <MenuItem title="What did I learn?" />
        <MenuItem title="Portfolio" />
        <MenuItem title="Contact" />
      </div>
    </div>
  );
}

export default Sidebar;
