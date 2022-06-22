import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  handleDecrementCounter() {
    this.setState({count: this.state.count-1})
  }
  
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
        <button onClick={() => this.handleDecrementCounter()}>Decrement</button>
      </div>
    )
  }
}

export default Counter