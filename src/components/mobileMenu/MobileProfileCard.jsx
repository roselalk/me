import { useState } from 'react'
import profilePicture from '../../assets/me.png'
import './mobile-menu.css'

function MobileProfileCard(props) {
//   const [count, setCount] = useState(0)

let korean = false;

if (props.language === "Korean") {
  korean = true;
}

  return (
    <div className='mobile-profile-card'>
      <img src={profilePicture} alt="" className="mobile-profile-card__img" />
      <h2 className='mobile-profile-card__name'>{korean ? "락로제" : "Rose Lalk"}</h2>
      <h3 className='mobile-profile-card__subtitle'>{korean ? "트레이니 개발자" : "Trainee Developer"}</h3>
    </div>
  )
}

export default MobileProfileCard
