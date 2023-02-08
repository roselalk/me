import { useState, useEffect } from "react";
import Bookmark from "../bookmark/Bookmark";
import Statistic from "./Statistic";
import "./statisticsPage.css";
import angularLogo from "../../assets/a.png";
import cleanCodeLogo from "../../assets/clean.jpg";
import javaLogo from "../../assets/java.png";
import javascriptLogo from "../../assets/javascript.png";
import reactLogo from "../../assets/react.png";
import secureLogo from "../../assets/secure.jpg";
import materialLogo from "../../assets/material.png";

function StatisticsPage() {


  return (
    <div className="statistics-page page">
      <Bookmark text="Learnt"/>
      <Statistic img={angularLogo}/>
      <Statistic img={cleanCodeLogo}/>
      <Statistic img={secureLogo}/>
    </div>
  );
}

export default StatisticsPage;
