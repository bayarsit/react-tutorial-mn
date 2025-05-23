import { useContext, useEffect, useReducer, useState } from "react";
import { UserContext } from "./S2E1-UserContext";

function S2E1Comp2Reducer() {
  // using useState
  const { user1: user, setUser1: setUser } = useContext(UserContext);
  const [imgName, setImgName] = useState(
    user.name == "Mario" ? "Mario_40" : user.name
  );

  //   using reducer
  const [state, dispatchUser] = useReducer(reducer, user);

  useEffect(() => {
    if (state.name === "Mario") {
      if (state.age > 50) {
        setImgName(state.name + "_60");
      } else if (state.age < 30) {
        setImgName(state.name + "_20");
      } else {
        setImgName(state.name + "_40");
      }
    }
    // If user is not Mario, set a default or other image logic if needed
    // For now, if not Mario, it will keep the image set by useState initially or previous state
  }, [state.age, state.name]); // Dependencies for the effect

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        setUser({ ...user, age: user.age + 1 }); //  on context
        return { ...state, age: state.age + 1 };
      case "decrement":
        setUser({ ...user, age: user.age - 1 }); //  on context
        return { ...state, age: state.age - 1 };
      default:
        return state;
    }
  }

  const increaseAge = () => {
    dispatchUser({ type: "increment" });
  };

  const decreaseAge = () => {
    dispatchUser({ type: "decrement" });
  };

  return (
    <div
      className="Comp-container"
      style={{ backgroundColor: "darkgreen", width: 320 }}
    >
      Context data:
      <br />
      name: {user.name}, age: {user.age}
      <br />
      <br />
      <img src={`/images/${imgName}.png`} width={200} />
      <br />
      <button onClick={decreaseAge}>- Decrease</button>"{state.age}"
      <button onClick={increaseAge}>+ Increase</button>
    </div>
  );
}

export default S2E1Comp2Reducer; //  give a chance to call it by any name
