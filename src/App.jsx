// import { useState } from "react";
import "./App.css";
import HomePage from "./components/home/HomePage";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import StatisticsPage from "./components/statistics-page/StatisticsPage";
import AboutMe from "./components/about-me/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  const [language, setLanguage] = useState("English")

  function changeLanguage(language) {
    setLanguage(language)
    console.log("Clicked")
  }

  console.log(language)

  return (
    <div className="app">
      <Router>
        <Sidebar language={language} handleClick={changeLanguage}/>
        <Routes>
          <Route path="/" element={<HomePage language={language}/>}></Route>
          <Route path="/about-me" element={<AboutMe language={language}/>}></Route>
          <Route path="/learned" element={<StatisticsPage language={language}/>}></Route>
          {/* <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
