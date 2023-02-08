import { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
// import logo from "../../assets/a.png";
import "./statistic.css";

function Statistic(props) {


  return (
    <div className="stat">
      <h2 className="stat__title">Angular</h2>
      <PieChart
        data={[
          { title: "One", value: 20, color: "white" },
          { title: "2", value: 20, color: "white" },
          { title: "3", value: 20, color: "white" },
          { title: "4", value: 20, color: "pink" },
        ]}
        className="stat__pie"
      />
      <img src={props.img} alt="" className="stat__logo" />
    </div>
  );
}

export default Statistic;
