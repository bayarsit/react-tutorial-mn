import { useState } from "react";
import MySidebarItem from "./SidebarItem";

function MySidebar() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={isHidden ? "App-sidebar-hidden" : "App-sidebar"}>
      <div>
        <button onClick={toggleSidebar}>{isHidden ? "+" : "x"}</button>
        <MySidebarItem item="Home" link="/" isHidden={isHidden} />
        <MySidebarItem
          item="S1:Ep1 Introduction to React and JSX"
          link="/season1/episode1"
          isHidden={isHidden}
        />
        <MySidebarItem
          item="S1: Ep2 Components and Props"
          link="/season1/episode2"
          isHidden={isHidden}
        />
        <MySidebarItem
          item="S1: Ep3 State and Lifecycle Methods"
          link="/season1/episode3"
          isHidden={isHidden}
        />
        <MySidebarItem
          item="S1: Ep4 Handling Events in React"
          link="/season1/episode4"
          isHidden={isHidden}
        />
        <MySidebarItem
          item="S1: Ep5 Building a Simple React Application"
          link="/season1/episode5"
          isHidden={isHidden}
        />
        <MySidebarItem
          item="S1: Exam"
          link="/season1/exam"
          isHidden={isHidden}
        />
        <hr style={{ borderColor: "orange" }} />
        <MySidebarItem
          item="S2:Ep1 React Fundamentals and Hooks"
          link="/season2/episode1"
          addClass="s2"
          isHidden={isHidden}
        />
        <MySidebarItem
          item="S2:Ep2 Redux Fundamentals"
          link="/season2/episode2"
          addClass="s2"
          isHidden={isHidden}
        />
      </div>
    </div>
  );
}

export default MySidebar;
