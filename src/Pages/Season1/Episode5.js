import FunctionalComp from "./FunctionalComp";
import ClassComp from "./ClassComp";
import FunctionalComp3 from "./FunctionalComp3";
import ClassComp3 from "./ClassComp3";
import FunctionalComp4 from "./FunctionalComp4";
import ClassComp4 from "./ClassComp4";
import { EpisodeScene } from "./Episode5/";

export const Episode5 = () => {
  function onClick1() {
    alert(1);
  }

  return (
    <div className="App-lesson">
      <div>
        <h3>Season 1, Episode 5: Building a Simple React Application</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <EpisodeScene />
      </div>
    </div>
  );
};
