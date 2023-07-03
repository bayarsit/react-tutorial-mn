import { useEffect, useState } from "react";
import { Mario } from "./Mario";
import { Item } from "./Item";

export const EpisodeScene = () => {
  const scene = {
    width: 1200,
    height: 500,
    floor: 450,
    coin: { x: 250, y: 100, width: 100, height: 100, img: "coin" },
    mushroom: { x: 550, y: 100, width: 100, height: 100, img: "mushroom" },
    enemy: { x: 850, y: 100, width: 100, height: 100, img: "enemy" },
  };
  const [score, setScore] = useState(0);
  const [live, setLive] = useState(1);

  useEffect(() => {
    document
      .getElementById("sceneMusic")
      ?.play()
      .catch((error) => {
        document.addEventListener(
          "click",
          () => {
            document.getElementById("sceneMusic").play();
          },
          { once: true }
        );
      });

    return () => {
      // Cleanup function
      // Code to run when the component unmounts or when the userName prop changes again
    };
  }, []); //  to check isWaiting, should listen every update

  return (
    <div
      className="game-scene"
      style={{ width: scene.width, height: scene.height }}
    >
      <div
        className="no-border"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          paddingRight: 10,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: 200, textAlign: "left", paddingLeft: 20 }}>
            score: {score}
          </div>
          <div style={{ width: 200, textAlign: "left", paddingLeft: 20 }}>
            live: {live}
          </div>
        </div>
        {/* scene sounds */}
        {/* <audio id="sceneMusic" autoPlay loop controls>
          <source src="/sounds/overworld.wav" type="audio/wav" />
        </audio> */}
      </div>

      {/* game items */}
      <Item data={scene.coin} />
      <Item data={scene.mushroom} />
      <Item data={scene.enemy} />
      {/* player - Mario */}
      <Mario
        scene={scene}
        score={score}
        live={live}
        updateScore={setScore}
        updateLive={setLive}
      />
      <div
        style={{
          backgroundColor: "rgb(26 62 26)",
          height: scene.height - scene.floor,
          width: "100%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingTop: 20,
        }}
      >
        ....................... .... .. . it is me Mario!
      </div>
    </div>
  );
};
