import React, { Component } from "react";
import "./style.css";
class Button extends Component {
  render() {
    return <div className="btn">{this.props.msg}</div>;
  }
}

export default Button;
