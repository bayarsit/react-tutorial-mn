import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/counter";

function S2E2Comp2(props) {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [newAge, setNewAge] = useState(props.age);
  const [imgName, setImgName] = useState(
    props.name == "Mario" ? "Mario_40" : props.name
  );

  const increaseAge = () => {
    dispatch(increment());
    setNewAge(newAge + 1);
  };

  const decreaseAge = () => {
    dispatch(decrement());
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
      name: {props.name}, age: {count}
      <br />
      <br />
      <img src={`/images/${imgName}.png`} width={200} />
      <br />
      <button onClick={decreaseAge}>- Decrease</button>"{newAge}"
      <button onClick={increaseAge}>+ Increase</button>
    </div>
  );
}

export default S2E2Comp2; //  give a chance to call it by any name
