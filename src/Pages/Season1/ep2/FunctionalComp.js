function FunctionalComp(props) {
  return (
    <div className="Comp-container" style={{ backgroundColor: "darkgreen" }}>
      Functional component
      <br />
      name: {props.name}, age: {props.age}
      <br />
      <br />
      <img src={`/images/${props.name}.png`} width={200} />
      <br />
      birthday: {props.bio?.birthday}, birthplace: {props.bio?.birthplace}
      {props.mycomp}
      <button onClick={props.onClick1}>Click me</button>
    </div>
  );
}

export default FunctionalComp; //  give a chance to call it by any name
