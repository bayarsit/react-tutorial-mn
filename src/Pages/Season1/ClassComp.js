import React, { Component } from "react";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mario",
      age: "40",
    };
  }

  componentDidMount() {
    console.log("====");
  }

  render() {
    return (
      <div className="Comp-container" style={{ backgroundColor: "darkgrey" }}>
        Class component
        <br />
        name: {this.props.name}, age: {this.props.age}
        <br />
        <br />
        <img src={`/images/${this.props.name}.png`} width={200} />
        <br />
        birthday: {this.props.bio?.birthday}, birthplace:{" "}
        {this.props.bio?.birthplace}
      </div>
    );
  }
}

export default ClassComp;
