import "./skill-card.css"

function SkillCard({visible, image}) {

  return (
    <div hidden={visible} className="skill-card">
        <img className="skill-card--image" src={image} alt="" />
    </div>
  );
}

export default SkillCard;
