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
  //   const [count, setCount] = useState(0)

  //Should have card components, which have a photo on one side and a bit of information on the other.
  //The goal is ultimately to have them animated so they flip like a real card when you hover over them.

  //Cards:
  //Travel: cheongsapo?

  //Background: me in forest?
  //Food: something I made myself? Something I ate and loved?
  //Korean: photo with classmates and certificates?

  const dataArray = data;

  console.log(dataArray);
  // console.log(`"../../assets/${dataArray.data[0].img}"`);

  //put data in bestand. pull in data from bestand and put in in array. refer to array using
  //array[0].title

  return (
    <div className="page about-page">
      {props.language === "English" && (
        <>
          {" "}
          <AboutCard
            title={dataArray.english[0].title}
            text={dataArray.english[0].text}
            img={pic1}
            icon={icon1}
            className=""
          />
          <AboutCard
            title={dataArray.english[1].title}
            text={dataArray.english[1].text}
            img={pic2}
            icon={icon2}
            className=""
          />
          <AboutCard
            title={dataArray.english[2].title}
            text={dataArray.english[2].text}
            img={pic3}
            icon={icon3}
            className=""
          />
          <AboutCard
            title={dataArray.english[3].title}
            text={dataArray.english[3].text}
            img={pic4}
            icon={icon4}
            className=""
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
          />
          <AboutCard
            title={dataArray.nederlands[1].title}
            text={dataArray.nederlands[1].text}
            img={pic2}
            icon={icon2}
            className=""
          />
          <AboutCard
            title={dataArray.nederlands[2].title}
            text={dataArray.nederlands[2].text}
            img={pic3}
            icon={icon3}
            className=""
          />
          <AboutCard
            title={dataArray.nederlands[3].title}
            text={dataArray.nederlands[3].text}
            img={pic4}
            icon={icon4}
            className=""
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
          />
          <AboutCard
            title={dataArray.korean[1].title}
            text={dataArray.korean[1].text}
            img={pic2}
            icon={icon2}
            className=""
          />
          <AboutCard
            title={dataArray.korean[2].title}
            text={dataArray.korean[2].text}
            img={pic3}
            icon={icon3}
            className=""
          />
          <AboutCard
            title={dataArray.korean[3].title}
            text={dataArray.korean[3].text}
            img={pic4}
            icon={icon4}
            className=""
          />
        </>
      )}
    </div>
  );
}

export default AboutMe;
