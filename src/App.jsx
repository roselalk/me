// import { useState } from "react";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Sidebar from "./components/sidebar/Sidebar";
import StatisticsPage from "./components/statistics-page/StatisticsPage";
import AboutMe from "./components/about-me/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/learned" element={<StatisticsPage />}></Route>
          {/* <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
