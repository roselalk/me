import { useState, useEffect } from "react";
import "./homePage.css";

function HomePage(props) {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv((prevState) => !prevState);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="home page">
      <div className="home__text">
        {props.language === "English" && <h2 className="home__name">Hi, I'm Rose</h2>}
        {props.language === "English" && 
        ((showDiv && (
          <h3 className="home__subtitle fade-subtitle">Frontend Enthousiast</h3>
        )))} 
        {props.language === "English" && 
        ((!showDiv && (
          <h3 className="home__subtitle fade-subtitle">Trainee Developer</h3>
        )))}


        {props.language === "Nederlands" && <h2 className="home__name">Hoi, ik ben Rose</h2>}
        {props.language === "Nederlands" && 
        ((showDiv && (
          <h3 className="home__subtitle fade-subtitle">Frontend Fanaticus</h3>
        )))} 
        {props.language === "Nederlands" && 
        ((!showDiv && (
          <h3 className="home__subtitle fade-subtitle">Trainee Developer</h3>
        )))}


        {props.language === "Korean" && <h2 className="home__name">안녕하세요</h2>}
        {props.language === "Korean" && 
        ((showDiv && (
          <h3 className="home__subtitle fade-subtitle">프론트엔드 열정주의자</h3>
        )))} 
        {props.language === "Korean" && 
        ((!showDiv && (
          <h3 className="home__subtitle fade-subtitle">트레이니 개발자</h3>
        )))}


        

      </div>
    </div>
  );
}

export default HomePage;
