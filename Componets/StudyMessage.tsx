import React, { Component } from "react";

class StudyMessage extends Component {
  state = {
    message: "Học code để đi làm"
  };

  handleClick = () => {
    this.setState({
      message: "Học code sẽ thành công. Cố lên!!!"
    });
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Thay đổi thông điệp</button>
      </div>
    );
  }
}

export default StudyMessage;
