import React, { Component } from "react";

class ClassComp4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAge: props.age,
    };
  }

  increaseAge = () => {
    this.setState({ newAge: this.state.newAge + 1 });
  };

  decreaseAge = () => {
    this.setState({ newAge: this.state.newAge - 1 });
  };

  _ondragEnd = (event) => {
    console.log("mushroom event is:", event.clientX);
    // alert(event.target);
  };

  _onDrop = (event) => {
    console.log("drop : ", event);
  };

  _ondragEvent = (event) => {
    event.dataTransfer.setData("sourceId", "mushroomId");
  };

  render() {
    return (
      <div
        className="Comp-container"
        style={{ backgroundColor: "darkgrey", width: 320 }}
      >
        Class component
        <br />
        name: {this.props.name}, age: {this.props.age}
        <br />
        <br />
        <img
          id="mushroomId"
          src={`/images/mushroom.png`}
          width={200}
          onDragStart={this._ondragEvent}
        />
        <br />
      </div>
    );
  }
}

export default ClassComp4;
