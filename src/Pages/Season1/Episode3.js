import FunctionalComp3 from "./ep3/FunctionalComp3";
import ClassComp3 from "./ep3/ClassComp3";

export const Episode3 = () => {
  function onClick1() {
    alert(1);
  }
  return (
    <div className="App-lesson">
      <div>
        <h3>Season 1, Episode 3: State and Lifecycle Methods</h3>
      </div>
      <p>Types of component: </p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          Functional
          <FunctionalComp3 name="Mario" age={40} />
        </div>
        <div>
          Class
          <ClassComp3 name="Luigi" age={37} />
        </div>
      </div>
    </div>
  );
};
