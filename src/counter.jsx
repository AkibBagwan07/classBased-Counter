import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() {
    this.setState((previousValue) => ({
      count: previousValue.count - 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>Counter app</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={(e) => this.increment(e)}>increment</button>
        <button onClick={(e) => this.decrement(e)}>decrement</button>
      </div>
    );
  }
}

export default Counter;
