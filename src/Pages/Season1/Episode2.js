import FunctionalComp from "./ep2/FunctionalComp";
import ClassComp from "./ep2/ClassComp";

export const Episode2 = () => {
  function onClick1() {
    alert(1);
  }
  return (
    <div className="App-lesson">
      <div>
        <h3>Season 1, Episode 2: Components and Props</h3>
      </div>
      <p>Types of component: </p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          Functional
          <FunctionalComp name="Mario" age={40} />
          <FunctionalComp
            name="Luigi"
            age={55}
            bio={{ birthday: "1940", birthplace: "mongolia" }}
            mycomp={<ClassComp name={"Mario"} age={"77"} />}
            onClick1={onClick1}
          />
        </div>
        <div>
          Class
          <ClassComp name="Luigi" age={37} />
        </div>
      </div>
    </div>
  );
};
