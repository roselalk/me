import profilePicture from '../../assets/me.png'
import './sidebar.css'
import LanguageContext from "../../context/language";
import { useContext } from "react";


function ProfileCard() {
const { language } = useContext(LanguageContext)

let korean = false;

if (language === "Korean") {
  korean = true;
}

  return (
    <div className='prof'>
      <img src={profilePicture} alt="" className="prof__img" />
      <h2 className='prof__name'>{korean ? "락로제" : "Rose Lalk"}</h2>
      <h3 className='prof__subtitle'>{korean ? "트레이니 개발자" : "Trainee Developer"}</h3>
    </div>
  )
}

export default ProfileCard
