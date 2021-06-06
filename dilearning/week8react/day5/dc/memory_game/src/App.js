import React from 'react'
import './App.css';
import superheroes from './superheroes.json'
import Hero from './components/Hero'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      heros: [],
      score: 0,
      top_score:0
    }
  }
  componentDidMount(){
    // if you have an api you will fetch
    this.setState({heros:superheroes.superheroes})
  }
  render(){
    console.log(heros);
    const {heros,score,top_score} = this.state;
  return (
    <>
      {
        heros.map((item,i)=>{
          return ( <Hero hero={item} key={i}/>)
        })
      }
    </>
  );
  }
}

export default App;
