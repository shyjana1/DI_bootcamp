import React from 'react'
import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import 'tachyons';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: [],
      searchText: '',
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
    this.setState({searchText: event.target.value})
  }
  handleClick = (event) => {

  }
  render(){
    const {arr, searchText} = this.state;
    const filteredRobots = arr.filter(item=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase)
    })

    return (
      <div className='tc'>
        <SearchBox daniel={this.handleChange} handleClick={this.handleClick}/>
        <CardsList robots={arr} />
      </div>
    );
  }

}

export default App;
