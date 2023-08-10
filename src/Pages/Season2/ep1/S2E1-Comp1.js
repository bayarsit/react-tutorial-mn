import { useContext, useEffect, useState } from "react";
import { UserContext } from "./S2E1-UserContext";

function S2E1Comp1() {
  // using useState
  const { user, setUser } = useContext(UserContext);

  //   using useState
  const [newAge, setNewAge] = useState(user.age);
  const [imgName, setImgName] = useState(
    user.name == "Mario" ? "Mario_40" : user.name
  );

  const increaseAge = () => {
    setNewAge(newAge + 1); //  local state change
    setUser({ ...user, age: user.age + 1 }); //  on context
  };

  const decreaseAge = () => {
    setNewAge(newAge - 1); //  local state change
    setUser({ ...user, age: user.age - 1 }); //  on context
  };

  useEffect(() => {
    // Code to run whenever the userName prop changes
    console.log(`age changed to: ${newAge}`);

    // just for fun, change image if age is changed
    if (user.name == "Mario") {
      if (newAge > 50) {
        setImgName(user.name + "_60");
      } else if (newAge < 30) {
        setImgName(user.name + "_20");
      } else {
        setImgName(user.name + "_40");
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
      Context data:
      <br />
      name: {user.name}, age: {user.age}
      <br />
      <br />
      <img src={`/images/${imgName}.png`} width={200} />
      <br />
      <button onClick={decreaseAge}>- Decrease</button>"{newAge}"
      <button onClick={increaseAge}>+ Increase</button>
    </div>
  );
}

export default S2E1Comp1; //  give a chance to call it by any name
