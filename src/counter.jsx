import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="counter">
        <h1>Counter app</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={(e) => this.setState((prev)=>({ count: prev.count + 1}))}>Increment</button>
        <button onClick={(e) => this.setState((prev)=>({ count: prev.count - 1}))}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
