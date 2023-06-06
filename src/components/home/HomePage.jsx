import { useState, useEffect } from "react";
import "./homePage.css";
import { useContext } from "react";
import LanguageContext from "../../context/language";


function HomePage(props) {
  const [showDiv, setShowDiv] = useState(false);
  const { language } = useContext(LanguageContext)


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv((prevState) => !prevState);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={props.mobile ? "home page--mobile" : "home page"}>

      {props.mobile && (
        <div className="home__text--mobile">
          {language === "English" && (
            <div className="home__text-div--mobile">
              <h1 className="home__h1--mobile">Hi</h1>
              <h3 className="home__h3--mobile">I’m Rose</h3>
            </div>
          )}

          {language === "Nederlands" && (
            <div className="home__text-div--mobile">
              <h1 className="home__h1--mobile">Hi</h1>
              <h3 className="home__h3--mobile">Ik ben Rose</h3>
            </div>
          )}

          {language === "Korean" && (
            <div className="home__text-div--mobile">
              <h1 className="home__h1--mobile">안녕</h1>
              <h3 className="home__h3--mobile">로제입니다</h3>
            </div>
          )}
        </div>
      )}

      {!props.mobile && (
        <div className="home__text">
          {language === "English" && (
            <h2 className="home__name">Hi, I'm Rose</h2>
          )}
          {language === "English" && showDiv && (
            <h3 className="home__subtitle fade-subtitle">
              Frontend Enthousiast
            </h3>
          )}
          {language === "English" && !showDiv && (
            <h3 className="home__subtitle fade-subtitle">Trainee Developer</h3>
          )}

          {language === "Nederlands" && (
            <h2 className="home__name">Hoi, ik ben Rose</h2>
          )}
          {language === "Nederlands" && showDiv && (
            <h3 className="home__subtitle fade-subtitle">Frontend Fanaticus</h3>
          )}
          {language === "Nederlands" && !showDiv && (
            <h3 className="home__subtitle fade-subtitle">Trainee Developer</h3>
          )}

          {language === "Korean" && (
            <h2 className="home__name">안녕하세요</h2>
          )}
          {language === "Korean" && showDiv && (
            <h3 className="home__subtitle fade-subtitle">
              프론트엔드 열정주의자
            </h3>
          )}
          {language === "Korean" && !showDiv && (
            <h3 className="home__subtitle fade-subtitle">트레이니 개발자</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;
