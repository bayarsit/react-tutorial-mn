import { useEffect } from "react";
import { Mario } from "./Mario";

export const EpisodeScene = () => {
  const scene = {
    width: 1200,
    height: 500,
    floor: 450,
  };

  useEffect(() => {
    document
      .getElementById("sceneMusic")
      .play()
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
      <Mario scene={scene} />
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
      {/* scene sounds */}
      <audio id="sceneMusic" autoPlay loop>
        <source src="/sounds/overworld.wav" type="audio/wav" />
      </audio>
    </div>
  );
};
