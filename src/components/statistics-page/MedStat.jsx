import "./statistic.css";
import { useEffect, useRef } from "react";
import VanillaTilt from 'vanilla-tilt'

function MedStat(props) {
    const vanillaDomNodeRef = useRef()

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
        <div className="stat__logo">
          <img src={props.img} alt="" className="medium" />
        </div>
      </div>
    </div>
  );
}

export default MedStat;
