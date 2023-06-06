import { useContext } from "react";
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
import LanguageContext from "../../context/language";
import MobileContext from "../../context/mobile";


function AboutMe() {
  const { language } = useContext(LanguageContext);
  const { mobile } = useContext(MobileContext)


  const dataArray = data;

  return (
    <div
      className={
        mobile ? "page--mobile mobile-about-page" : "page about-page"
      }
    >
      {language === "English" && (
        <>
          {" "}
          <AboutCard
            title={dataArray.english[0].title}
            text={dataArray.english[0].text}
            img={pic1}
            icon={icon1}
          />
          <AboutCard
            title={dataArray.english[1].title}
            text={dataArray.english[1].text}
            img={pic2}
            icon={icon2}
          />
          <AboutCard
            title={dataArray.english[2].title}
            text={dataArray.english[2].text}
            img={pic3}
            icon={icon3}
          />
          <AboutCard
            title={dataArray.english[3].title}
            text={dataArray.english[3].text}
            img={pic4}
            icon={icon4}
          />
        </>
      )}
      {language === "Nederlands" && (
        <>
          {" "}
          <AboutCard
            title={dataArray.nederlands[0].title}
            text={dataArray.nederlands[0].text}
            img={pic1}
            icon={icon1}
          />
          <AboutCard
            title={dataArray.nederlands[1].title}
            text={dataArray.nederlands[1].text}
            img={pic2}
            icon={icon2}
          />
          <AboutCard
            title={dataArray.nederlands[2].title}
            text={dataArray.nederlands[2].text}
            img={pic3}
            icon={icon3}
          />
          <AboutCard
            title={dataArray.nederlands[3].title}
            text={dataArray.nederlands[3].text}
            img={pic4}
            icon={icon4}
          />
        </>
      )}
      {language === "Korean" && (
        <>
          {" "}
          <AboutCard
            title={dataArray.korean[0].title}
            text={dataArray.korean[0].text}
            img={pic1}
            icon={icon1}
          />
          <AboutCard
            title={dataArray.korean[1].title}
            text={dataArray.korean[1].text}
            img={pic2}
            icon={icon2}
          />
          <AboutCard
            title={dataArray.korean[2].title}
            text={dataArray.korean[2].text}
            img={pic3}
            icon={icon3}
          />
          <AboutCard
            title={dataArray.korean[3].title}
            text={dataArray.korean[3].text}
            img={pic4}
            icon={icon4}
          />
        </>
      )}
    </div>
  );
}

export default AboutMe;
