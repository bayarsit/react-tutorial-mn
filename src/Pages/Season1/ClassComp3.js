import React, { Component } from "react";

class ClassComp3 extends Component {
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
        <img src={`/images/${this.props.name}.png`} width={200} />
        <br />
        <button onClick={this.decreaseAge}>- Decrease</button>"
        {this.state?.newAge}"
        <button onClick={this.increaseAge}>+ Increase</button>
      </div>
    );
  }
}

export default ClassComp3;
