import { EpisodeScene } from "./ep5";

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
