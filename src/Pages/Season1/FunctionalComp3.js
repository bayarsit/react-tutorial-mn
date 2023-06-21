import { useEffect, useState } from "react";

function FunctionalComp3(props) {
  const [newAge, setNewAge] = useState(props.age);
  const [imgName, setImgName] = useState(
    props.name == "Mario" ? "Mario_40" : props.name
  );

  const increaseAge = () => {
    setNewAge(newAge + 1);
  };

  const decreaseAge = () => {
    setNewAge(newAge - 1);
  };

  useEffect(() => {
    // Code to run whenever the userName prop changes
    console.log(`age changed to: ${newAge}`);

    // just for fun, change image if age is changed
    if (props.name == "Mario") {
      if (newAge > 50) {
        setImgName(props.name + "_60");
      } else if (newAge < 30) {
        setImgName(props.name + "_20");
      } else {
        setImgName(props.name + "_40");
      }
    }

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
      <img src={`/images/${imgName}.png`} width={200} />
      <br />
      <button onClick={decreaseAge}>- Decrease</button>"{newAge}"
      <button onClick={increaseAge}>+ Increase</button>
    </div>
  );
}

export default FunctionalComp3; //  give a chance to call it by any name
