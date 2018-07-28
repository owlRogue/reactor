import React from 'react';

class Counter extends React.component {
  state = {
    count: '0'
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <p>Your Score: {this.state.count}/16</p>
    )
  };
}

export default Counter;