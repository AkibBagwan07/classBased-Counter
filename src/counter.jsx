import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
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
        <p>Count:{this.state.count}</p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default Counter;
