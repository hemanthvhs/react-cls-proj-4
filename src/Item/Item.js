import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeNum(this.props.value);
  }

  render() {
    return (
      <div className="Item">
        <div className="num">{this.props.value}</div>
        <button className="remove" onClick={this.handleRemove}>
          X
        </button>
      </div>
    );
  }
}

export default Item;
