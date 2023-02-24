import { useState } from "react";
import AboutCard from "./AboutCard";
import "./aboutMe.css";
import data from "../../aboutMeData";
import pic1 from "../../assets/cheongsapo.jpg";
import pic2 from "../../assets/forest.jpg";
import pic3 from "../../assets/bagel.jpg";
import pic4 from "../../assets/korean-red.jpg";
import icon1 from "../../assets/globe.png";
import icon2 from "../../assets/cap.png";
import icon3 from "../../assets/cheese.png";
import icon4 from "../../assets/korean.png";

function AboutMe(props) {

  const dataArray = data;

  console.log(dataArray);

  return (
    <div className={props.mobile ? "page--mobile mobile-about-page" : "page about-page"}>
      {props.language === "English" && (
        <>
          {" "}
          <AboutCard
            title={dataArray.english[0].title}
            text={dataArray.english[0].text}
            img={pic1}
            icon={icon1}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.english[1].title}
            text={dataArray.english[1].text}
            img={pic2}
            icon={icon2}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.english[2].title}
            text={dataArray.english[2].text}
            img={pic3}
            icon={icon3}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.english[3].title}
            text={dataArray.english[3].text}
            img={pic4}
            icon={icon4}
            className=""
            mobile={props.mobile}
          />
        </>
      )}
      {props.language === "Nederlands" && (
        <>
          {" "}
          <AboutCard
            title={dataArray.nederlands[0].title}
            text={dataArray.nederlands[0].text}
            img={pic1}
            icon={icon1}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.nederlands[1].title}
            text={dataArray.nederlands[1].text}
            img={pic2}
            icon={icon2}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.nederlands[2].title}
            text={dataArray.nederlands[2].text}
            img={pic3}
            icon={icon3}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.nederlands[3].title}
            text={dataArray.nederlands[3].text}
            img={pic4}
            icon={icon4}
            className=""
            mobile={props.mobile}
          />
        </>
      )}
      {props.language === "Korean" && (
        <>
          {" "}
          <AboutCard
            title={dataArray.korean[0].title}
            text={dataArray.korean[0].text}
            img={pic1}
            icon={icon1}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.korean[1].title}
            text={dataArray.korean[1].text}
            img={pic2}
            icon={icon2}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.korean[2].title}
            text={dataArray.korean[2].text}
            img={pic3}
            icon={icon3}
            className=""
            mobile={props.mobile}
          />
          <AboutCard
            title={dataArray.korean[3].title}
            text={dataArray.korean[3].text}
            img={pic4}
            icon={icon4}
            className=""
            mobile={props.mobile}
          />
        </>
      )}
    </div>
  );
}

export default AboutMe;
