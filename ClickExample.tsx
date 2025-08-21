import React, { Component } from "react";

class ClickExample extends Component {
  state = {
    message: "RikkeiEdu"
  };

  handleClick = () => {
    this.setState({
      message: "RikkeiSoft"
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClickExample;
