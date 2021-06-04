import React, { Component } from 'react'
import quotes from '../QuotesDatabase'

export default class Qoutes extends Component {
    constructor(props) {
        super(props);
        console.log(quotes);
        this.state = {
            quoteList: quotes,
            random: 0
        }
    }
  
    random = (num)=>{
     return Math.floor(Math.random() * num)

}
    handleClick = ()=>{

    let random2 = this.random(quotes.length)
    this.setState({random:random2}) 
    console.log(random2);
}

  render() {
      const {random} = this.state
      let r=this.random(255)
      let g=this.random(255)
      let b=this.random(255)
      return ( <div style={{backgroundColor:`rgb(${r},${g},${b})`}}>

      <h1 > My Favorite Qoute is: "{this.state.quoteList[random].quote}" </h1>
      <h1 > {this.state.quoteList[random].author?this.state.quoteList[random].author:"Unknown"} </h1>
      <button type="button" onClick= {this.handleClick}>new quote</button>
      </div>
    );

}
}