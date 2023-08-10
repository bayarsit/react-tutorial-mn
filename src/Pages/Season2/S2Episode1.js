import S2E1Comp2Reducer from "./ep1/S2E1-Comp2Reducer";
import S2E1Comp1 from "./ep1/S2E1-Comp1";
import { UserContextProvider } from "./ep1/S2E1-UserContext";

export const S2Episode1 = () => {
  return (
    <div className="App-lesson">
      <div>
        <h3>Season 2, Episode 1: React Fundamentals and Hooks</h3>
      </div>
      <p>Context: </p>

      <UserContextProvider>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              Component 1
              <S2E1Comp1 />
            </div>
            <div>
              Component 2
              <S2E1Comp1 />
            </div>
          </div>
          <p>useReducer: </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <S2E1Comp2Reducer />
          </div>
        </div>
      </UserContextProvider>
    </div>
  );
};
