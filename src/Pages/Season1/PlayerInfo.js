function PlayerInfo(props) {
  return (
    <div className="Comp-container" style={{ backgroundColor: "darkgreen" }}>
      Functional component
      <br />
      name: {props.name}, age: {props.age}
    </div>
  );
}

export default PlayerInfo; //  give a chance to call it by any name
