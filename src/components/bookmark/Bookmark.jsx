
import "./bookmark.css";

function Bookmark(props) {

  return (
    <div className="bookmark">
      <h3 className="bookmark__text">{props.text}</h3>
    </div>
  );
}

export default Bookmark;
