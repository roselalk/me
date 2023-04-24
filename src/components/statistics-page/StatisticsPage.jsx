import { useState, useEffect, useRef } from "react";
import Bookmark from "../bookmark/Bookmark";
import Statistic from "./Statistic";
import "./statisticsPage.css";
import angularLogo from "../../assets/angular.png";
import cleanCodeLogo from "../../assets/clean.jpg";
import typescriptLogo from "../../assets/ts.png";
import javaLogo from "../../assets/java.jpg";
import javascriptLogo from "../../assets/js.jpg";
import cssLogo from "../../assets/css.jpg";
import reactLogo from "../../assets/react.jpg";
import secureLogo from "../../assets/secure.jpg";
import materialLogo from "../../assets/material.jpg";
import testingLogo from "../../assets/testing.jpg";
import MyPieChart from "../charts/PieChart";
import { LineChart } from "recharts";
import MyLineChart from "../charts/LineChart";
import SmallStat from './SmallStat';
import MedStat from "./MedStat";
import LargeStat from "./LargeStat";



function StatisticsPage(props) {
  //Want to do:
  //- Refactoring: create largeStat, medStat and smallStat so size does not have to be a prop anymore for every single element

  return (
    <div className={props.mobile ? "page--mobile" : " page"} >
      {props.mobile ? (
        <div className="statistics-page--mobile" >
          <div className="statistics-page__title-div--mobile" >
            {props.language === "English" && (
              <h2 className="statistics-page__title--mobile">What are my skills?</h2>
            )}
            {props.language === "Nederlands" && (
              <h2 className="statistics-page__title--mobile">
                Wat zijn mijn skills?
              </h2>
            )}
            {props.language === "Korean" && (
              <h2 className="statistics-page__title--mobile">내가 무엇에 집중하였는가?</h2>
            )}
          </div>
          <div className="statistics-page__grid--mobile" >
            <div className="angular" >
              <Statistic
                title="Angular"
                img={angularLogo}
              />
            </div>
            <div className="react">
              <Statistic
                title="React"
                img={reactLogo}
                size="large"
              />
            </div>
            <div className="java">
              <Statistic
                title="Java"
                img={javaLogo}
                size="large"
              />
            </div>
            <div className="css">
              <Statistic
                title="CSS (Flex & Grid)"
                img={cssLogo}
                size="large"
              />
            </div>
            <div className="clean">
              <Statistic
                title="Clean Code"
                img={cleanCodeLogo}
                size="medium"
              />
            </div>
            <div className="typescript">
              <Statistic
                title="TypeScript"
                img={typescriptLogo}
                size="medium"
              />
            </div>
            <div className="testing">
              <Statistic
                title="Testing"
                img={testingLogo}
                size="medium"
              />
            </div>
            <div className="security">
              <Statistic
                title="Security"
                img={secureLogo}
                size="small"
              />
            </div>
            <div className="material">
              <Statistic
                title="Angular Material"
                img={materialLogo}
                size="small"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="statistics-page" >
          {props.language === "English" && (
            <h2 className="stat-page__title">What are my skills?</h2>
          )}
          {props.language === "Nederlands" && (
            <h2 className="stat-page__title">
              Wat zijn mijn skills?
            </h2>
          )}
          {props.language === "Korean" && (
            <h2 className="stat-page__title">내가 무엇에 집중하였는가?</h2>
          )}

          {/* <div className="statistics"> */}
          <div className="large-statistics">
            <LargeStat
              title="Angular"
              img={angularLogo}
            />

            <LargeStat
              title="React"
              img={reactLogo}
            />
            <LargeStat
              title="Java"
              img={javaLogo}
            />
            <LargeStat
              title="CSS (Flex & Grid)"
              img={cssLogo}
            />
          </div>

          <div className="medium-statistics">
            <MedStat
              title="Clean Code"
              img={cleanCodeLogo}
            />
            <MedStat
              title="TypeScript"
              img={typescriptLogo}
            />
            <MedStat
              title="Testing"
              img={testingLogo}
            />
          </div>

          <div className="small-statistics">
            <SmallStat
              title="Security"
              img={secureLogo}
            />

            <SmallStat
              title="Angular Material"
              img={materialLogo}
            />


          </div>
        </div>
      )}

    </div>
  );
}

export default StatisticsPage;
