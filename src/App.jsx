// import { useState } from "react";
import "./App.css";
import HomePage from "./components/home/HomePage";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import StatisticsPage from "./components/statistics-page/StatisticsPage";
import AboutMe from "./components/about-me/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNav from "./components/mobileNav/MobileNav";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import { useLocation } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState("English");
  const [mobileNavVisible, setMobileNavVisible] = useState(true);

  function changeLanguage(language) {
    setLanguage(language);
    console.log("Clicked");
  }

  console.log(language);

  const mobile = useMediaQuery({ query: "(max-width: 1000px)" });

  console.log("mobile?: " + mobile);

  console.log("nav visible: " + mobileNavVisible);

  return (
    <div className={mobile ? "app__mobile" : "app__desktop"}>
      <Router>
        {!mobile && (
          <Sidebar language={language} handleClick={changeLanguage} />
        )}
        {mobile && (
          <div>{mobileNavVisible && <MobileNav language={language} />}</div>
        )}
        <Routes>
          <Route
            path="/"
            element={<HomePage language={language} mobile={mobile} />}
          ></Route>
          <Route
            path="/about-me"
            element={<AboutMe language={language} mobile={mobile} />}
          ></Route>
          <Route
            path="/learned"
            element={<StatisticsPage language={language} mobile={mobile} />}
          ></Route>
          <Route
            path="/menu"
            element={
              <MobileMenu
                language={language}
                mobile={mobile}
                showNav={setMobileNavVisible}
                handleClick={changeLanguage}
                prevLocation={useLocation}
              />
            }
          ></Route>
          {/* <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
