import { useDispatch, useSelector } from "react-redux";
import S2E1Comp2 from "./ep2/S2E2-Comp2";
import { decrement, increment } from "../../redux/counter";

export const S2Episode2 = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App-lesson">
      <div>
        <h3>Season 2, Episode 2: Redux Fundamentals</h3>
      </div>
      <p>Redux: </p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span>
          <span>on container component: </span>
          <br />
          <br />
          {count}
          <br />
          <br />
          <button onClick={() => dispatch(decrement())}>- Decrease</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => dispatch(increment())}>+ Increase</button>
        </span>

        <S2E1Comp2 name="Mario" age={40} />
      </div>
    </div>
  );
};
