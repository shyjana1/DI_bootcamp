import React from 'react'
import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import 'tachyons';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // this.state.arr = data
      // console.log(this.state.arr);
      this.setState({arr:data})
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleChange = (event) => {
    console.log(event.target.value);
  }
  render(){
    const {arr} = this.state;
    return (
      <div className='tc'>
        <SearchBox daniel={this.handleChange}/>
        <CardsList robots={arr} />
      </div>
    );
  }

}

export default App;
