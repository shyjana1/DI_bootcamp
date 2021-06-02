import React from 'react'
import App from './App'

class Counter extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
  }
  handleClick = () => {
    this.setState({counter:++this.state.counter})
  }
  render(){
    return(
      <div>
        <button> onClick={this.handleClick}Click</button>
        {this.state.counter}
      </div>
    )
  }
}
export default Counter