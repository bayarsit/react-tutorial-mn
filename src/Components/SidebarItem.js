import { Link } from "react-router-dom";

function MySidebarItem({ item, link, isHidden, addClass }) {
  return (
    <div>
      <Link className={`App-sidebarItem ${addClass}`} to={link}>
        {isHidden ? ".." : item}
      </Link>
    </div>
  );
}

export default MySidebarItem;
