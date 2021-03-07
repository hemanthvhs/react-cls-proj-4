import React, { Component } from "react";
import Item from "../Item/Item";

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5, 6] };
    this.removeNum = this.removeNum.bind(this);
  }

  removeNum(curNum) {
    console.log(curNum);
    this.setState(st => {
      return {
        nums: st.nums.filter(num => num !== curNum)
      };
    });
  }

  render() {
    const num = this.state.nums.map(num => {
      return <Item value={num} removeNum={this.removeNum} />;
    });
    return (
      <div>
        <p>Number List</p>
        {num}
      </div>
    );
  }
}

export default NumberList;
