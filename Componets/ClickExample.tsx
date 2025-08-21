import React, { Component } from "react";

type State = {
  count: number;
};

class ClickExample extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Click Example</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClickExample;
