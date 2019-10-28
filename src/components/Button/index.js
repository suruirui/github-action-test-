import React, { Component } from "react";
import "./style.css";
class Button extends Component {
  handleBtn = () => {
    alert(this.props.msg);
  };
  render() {
    return (
      <div className="btn" onClick={this.handleBtn}>
        {this.props.msg}
      </div>
    );
  }
}

export default Button;
