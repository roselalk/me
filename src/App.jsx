import { useState } from "react";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Sidebar from "./components/sidebar/Sidebar";
import StatisticsPage from "./components/statistics-page/StatisticsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Sidebar />
      {/* <HomePage /> */}
      <StatisticsPage />
    </div>
  );
}

export default App;
