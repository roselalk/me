import { useContext } from "react";
import ProfileCard from "./ProfileCard";
import "./sidebar.css";
import { Link } from "react-router-dom";
import LanguageContext from "../../context/language";
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const { language, setLanguage } = useContext(LanguageContext)
  const {pathname} = useLocation();


  return (
    <div className="sidebar">
      <ProfileCard />

      <div className="menu-items">
        <Link to="/" className={`menu-item_${(pathname === '/') ? 'active' : ''} menu-item__title`}>
          {language === "Nederlands" && <p>Home</p>}
          {language === "Korean" && <p>홈</p>}
          {language === "English" && <p>Home</p>}
        </Link>

        <Link className={`menu-item_${(pathname === '/about-me') ? 'active' : ''} menu-item__title`} to="/about-me">
          {language === "English" && <p>About me</p>}
          {language === "Nederlands" && <p>Wie ben ik?</p>}
          {language === "Korean" && <p>나에 대해서</p>}
        </Link>

        <Link className={`menu-item_${(pathname === '/learned') ? 'active' : ''} menu-item__title`} to="/learned">
          {language === "English" && <p>What did I learn?</p>}
          {language === "Nederlands" && <p>Wat heb ik geleerd?</p>}
          {language === "Korean" && <p>내가 배운 것에 대해서</p>}
        </Link>
      </div>

      <div className="languages">
        <p className="language-option" onClick={() => setLanguage("Nederlands")}>Nederlands</p>
        <p>|</p>
        <p className="language-option" onClick={() => setLanguage("English")}>English</p>
        <p>|</p>
        <p className="language-option" onClick={() => setLanguage("Korean")}>한국어</p>
      </div>
    </div>
  );
}

export default Sidebar;
