import ProfileCard from "./ProfileCard";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar(props) {
  //   const [count, setCount] = useState(0)

  return (
    <div className="sidebar">
      <ProfileCard language={props.language} />
      <div className="menu-items">
        <Link to="/" className="menu-item menu-item__title">
          {props.language === "English" && <p>Home</p>}
          {props.language === "Nederlands" && <p>Home</p>}
          {props.language === "Korean" && <p>홈</p>}
        </Link>
        <Link className="menu-item menu-item__title" to="/about-me">
          {props.language === "English" && <p>About me</p>}
          {props.language === "Nederlands" && <p>Wie ben ik?</p>}
          {props.language === "Korean" && <p>나에 대해서</p>}
        </Link>
        <Link className="menu-item menu-item__title" to="/learned">
          {props.language === "English" && <p>What did I learn?</p>}
          {props.language === "Nederlands" && <p>Wat heb ik geleerd?</p>}
          {props.language === "Korean" && <p>내가 배운 것에 대해서</p>}
        </Link>
        {/* <Link className="menu-item menu-item__title" to="/portfolio">Portfolio</Link>
        <Link className="menu-item menu-item__title" to="/contact">Contact</Link> */}
      </div>
      <div className="languages">
        <p className="language-option" onClick={() => props.handleClick("Nederlands")}>Nederlands</p>
        <p>|</p>
        <p className="language-option" onClick={() => props.handleClick("English")}>English</p>
        <p>|</p>
        <p className="language-option" onClick={() => props.handleClick("Korean")}>한국어</p>
      </div>
    </div>
  );
}

export default Sidebar;
