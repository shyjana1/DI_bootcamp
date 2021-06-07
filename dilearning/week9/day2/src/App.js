import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
class App extends Component {

  constructor() {
      super();
      this.state = {
          // property1: 'text one',
          // property2: 'text two'

  };
  }
  
  handleChange = (event) => {
    this.setState({property1:event.target.value})
  }
  handleClick = (event) => {
    this.setState({property2:this.state.property1})
  }
    
    render() {
  return (
      <>
          <div className="box" >

          <div className="App">
          <h1>simple redux example</h1>
          <h3>property one: {this.props.prop1}</h3>
          <input type="text" onChange={this.handleChange}></input>
          <h3>property two: {this.props.prop2}</h3>
          <button onClick={this.handleClick}>Click</button>
          </div>
          </div>
          
      </>

  )
    
}
}
const mapStateToProps = (state) =>{
  // returns an object
  return {
    prop1: state.property11,
    prop2: state.property22
  }
}

const mapDispatchToProps = (dispatch)=>{
  
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
