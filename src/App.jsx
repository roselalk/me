// import { useState } from "react";
import "./App.css";
import HomePage from "./components/home/HomePage";
import { useContext, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import StatisticsPage from "./components/statistics-page/StatisticsPage";
import AboutMe from "./components/about-me/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileNav from "./components/mobileNav/MobileNav";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import { useLocation } from "react-router-dom";
import MobileContext from "./context/mobile";
import SkillPage from "./components/SkillPage";

function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(true);

  const { mobile } = useContext(MobileContext)

  return (
    <div className={mobile ? "app__mobile" : "app__desktop"}>
      <Router>
        {!mobile && (
          <Sidebar />
        )}
        {mobile && (
          <div>{mobileNavVisible && <MobileNav />}</div>
        )}
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          ></Route>
          <Route
            path="/about-me"
            element={<AboutMe />}
          ></Route>
          <Route
            path="/learned"
            element={<SkillPage />}
          ></Route>
          <Route
            path="/menu"
            element={
              <MobileMenu
                showNav={setMobileNavVisible}
                prevLocation={useLocation}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
