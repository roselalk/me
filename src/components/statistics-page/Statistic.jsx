
import "./statistic.css";
import { useState, useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt'

function Statistic(props) {
    const vanillaDomNodeRef = useRef()

    console.log(vanillaDomNodeRef);

    useEffect(() => {
        //this is where the effect goes
        const tiltNode = vanillaDomNodeRef.current
        VanillaTilt.init(tiltNode, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        })
    }, [])
  return (
    <div className="stat" ref={vanillaDomNodeRef}>
      <div >
        {/* <h2 className={props.fontSize}>{props.title}</h2> */}
        <div className="stat__logo">
          <img src={props.img} alt="" className={props.size} />
        </div>
      </div>
    </div>
  );
}

export default Statistic;
