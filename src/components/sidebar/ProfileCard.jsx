import { useState } from 'react'
import profilePicture from '../../assets/me.png'
import './sidebar.css'

function ProfileCard() {
//   const [count, setCount] = useState(0)

  return (
    <div className='prof'>
      <img src={profilePicture} alt="" className="prof__img" />
      <h2 className='prof__name'>Rose Lalk</h2>
      <h3 className='prof__subtitle'>Trainee Developer</h3>
    </div>
  )
}

export default ProfileCard
