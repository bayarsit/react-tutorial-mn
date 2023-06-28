import { useEffect, useState } from "react";

function FunctionalComp4(props) {
  const [newAge, setNewAge] = useState(props.age);
  const [imgName, setImgName] = useState("mario_small");

  const increaseAge = () => {
    setNewAge(newAge + 1);
  };

  const decreaseAge = () => {
    setNewAge(newAge - 1);
  };

  const _ondragEnd = (event) => {
    console.log("event is:", event.clientX);

    // alert(event.target);
  };

  const _onDrop = (event) => {
    let getId = event?.dataTransfer?.getData("sourceId");
    console.log(getId);
    if (getId == "mushroomId") {
      setImgName("mario_big");
    } else {
      setImgName("mario_small");
    }
  };

  const _ondragEvent = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // Code to run whenever the userName prop changes
    console.log(`age changed to: ${newAge}`);

    return () => {
      // Cleanup function
      // Code to run when the component unmounts or when the userName prop changes again
    };
  }, [newAge]);

  return (
    <div
      className="Comp-container"
      style={{ backgroundColor: "darkgreen", width: 320 }}
    >
      Functional component
      <br />
      name: {props.name}, age: {props.age}
      <br />
      <br />
      <img
        id="marioImg"
        src={`/images/${imgName}.png`}
        width={200}
        onDragOver={_ondragEvent}
        onDragEnd={_ondragEnd}
        onDrop={_onDrop}
      />
      <br />
    </div>
  );
}

export default FunctionalComp4; //  give a chance to call it by any name
