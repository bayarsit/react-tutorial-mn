import FunctionalComp from "./FunctionalComp";
import ClassComp from "./ClassComp";
import FunctionalComp3 from "./FunctionalComp3";
import ClassComp3 from "./ClassComp3";
import FunctionalComp4 from "./FunctionalComp4";
import ClassComp4 from "./ClassComp4";

export const Episode4 = () => {
  function onClick1() {
    alert(1);
  }

  return (
    <div className="App-lesson">
      <div>
        <h3>Season 1, Episode 4: Handling Events in React</h3>
      </div>
      <p> Drag Mushroom to Mario: </p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          Functional
          <FunctionalComp4 name="Mario" age={40} />
        </div>
        <div>
          Class
          <ClassComp4 name="Mushr" age={50} />
        </div>
      </div>
    </div>
  );
};
