import { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
// import logo from "../../assets/a.png";
import "./statistic.css";

function Statistic(props) {
  return (
    <div className="stat">
      <div >
        {/* <h2 className={props.fontSize}>{props.title}</h2> */}
        <div className="stat__logo">
          <img src={props.img} alt="" className={props.size} />
        </div>
      </div>
    </div>
  );
}

export default Statistic;
