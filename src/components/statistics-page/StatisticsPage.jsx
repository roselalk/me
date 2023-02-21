import { useState, useEffect } from "react";
import Bookmark from "../bookmark/Bookmark";
import Statistic from "./Statistic";
import "./statisticsPage.css";
import angularLogo from "../../assets/angular.png";
import cleanCodeLogo from "../../assets/clean.jpg";
import typescriptLogo from "../../assets/ts.png";
import javaLogo from "../../assets/java.jpg";
import javascriptLogo from "../../assets/js.jpg";
import reactLogo from "../../assets/react.jpg";
import secureLogo from "../../assets/secure.jpg";
import materialLogo from "../../assets/material.jpg";
import testingLogo from "../../assets/testing.jpg";

function StatisticsPage(props) {
  //Angular - React - CSS (Flex and Grid) - Java
  //Clean Code - Testing - TypeScript
  //Security - Angular Material
  return (
    <div className=" page">
      {/* <Bookmark text="Learnt" /> */}
      <div className="statistics-page">
        {props.language === "English" && <h2 className="stat-page__title">What did I focus on?</h2>}
        {props.language === "Nederlands" && <h2 className="stat-page__title">Waar heb ik mijn aandacht aan besteed?</h2>}
        {props.language === "Korean" && <h2 className="stat-page__title">내가 무엇에 집중하였는가?</h2>}
        
        {/* <div className="statistics"> */}
          <div className="large-statistics">
            <Statistic
              className="statistic large"
              title="Angular"
              img={angularLogo}
              size="large"
            />

            <Statistic
              className="statistic large"
              title="React"
              img={reactLogo}
              size="large"
            />
            <Statistic
              className="statistic large"
              title="Java"
              img={javaLogo}
              size="large"
            />
            <Statistic
              className="statistic large"
              title="CSS (Flex & Grid)"
              img={javascriptLogo}
              size="large"
            />
          </div>

          <div className="medium-statistics">
            <Statistic
              className="statistic medium"
              title="Clean Code"
              img={cleanCodeLogo}
              size="medium"
            />
            <Statistic
              className="statistic medium"
              title="TypeScript"
              img={typescriptLogo}
              size="medium"
            />
            <Statistic
              className="statistic medium"
              title="Testing"
              img={testingLogo}
              size="medium"
            />
          </div>

          <div className="small-statistics">
            <Statistic
              className="statistic small"
              title="Security"
              img={secureLogo}
              size="small"
            />

            <Statistic
              className="statistic small"
              title="Angular Material"
              img={materialLogo}
              size="small"
            />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default StatisticsPage;
