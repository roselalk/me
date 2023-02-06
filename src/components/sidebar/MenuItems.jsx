import { useState } from 'react'
// import './sidebar.css'

function MenuItem(props) {
//   const [count, setCount] = useState(0)

  return (
    <div className='menu-item'>
      <h3 className='menu-item__title'>{props.title}</h3>
    </div>
  )
}

export default MenuItem
