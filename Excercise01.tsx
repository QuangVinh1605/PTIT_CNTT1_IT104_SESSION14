import React, { Component } from "react";

class Exercise01 extends Component {
  state = {
    userName: "Nguyễn Quang Vinh",
  };

  render() {
    return (
      <div>
        <h2>Tên của tôi là: {this.state.userName}</h2>
      </div>
    );
  }
}

export default Exercise01;
