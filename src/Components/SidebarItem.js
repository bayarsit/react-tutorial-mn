import { Link } from "react-router-dom";

function MySidebarItem({ item, link, isHidden }) {
  return (
    <div>
      <Link className="App-sidebarItem" to={link}>
        {isHidden ? ".." : item}
      </Link>
    </div>
  );
}

export default MySidebarItem;
