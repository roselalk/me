import { useState, useEffect } from "react";
import "./homePage.css";

function HomePage() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    console.log("Effect rendered");
    const timer = setTimeout(() => {
      setShowDiv((prevState) => !prevState);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="home page">
      <div className="home__text">
        <h2 className="home__name">Hi, I'm Rose</h2>
        {/* <h3 className="home__subtitle fade-subtitle">
          {showDiv ? "Frontend Enthousiast" : "Trainee Developer"}
        </h3> */}
        {showDiv && (
          <h3 className="home__subtitle fade-subtitle">Frontend Enthousiast</h3>
        )}
        {!showDiv && (
          <h3 className="home__subtitle fade-subtitle">Trainee Developer</h3>
        )}
      </div>
    </div>
  );
}

export default HomePage;
