import { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
// import logo from "../../assets/a.png";
import "./statistic.css";

function Statistic(props) {
  return (
    <div className="stat">
      <div >
        <h2 className="stat__title">{props.title}</h2>
        {/* <PieChart
        // animation
        // animationDuration={500}
        // animationEasing="ease-out"
        data={[
          { title: "", value: 100-props.percentage, color: "grey" },
          { title: "Percentage of time spent", value: 1*props.percentage, color: "pink" },
        ]}
        className="stat__pie"
      /> */}
        <div className="stat__logo">
          <img src={props.img} alt="" className={props.size} />
        </div>
      </div>
    </div>
  );
}

export default Statistic;
