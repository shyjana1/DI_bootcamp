import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          favoritecolor: "red"
        }
    }
    shouldComponentUpdate(){
      return true
    }
    favoriteColor = () => {
      
      // this.setState({favoritecolor: "blue"});
      this.setState({favoritecolor: "pink"});

    // componentDidMount(){
    //   setTimeout(() =>{
    //     this.setState({favoritecolor: "yellow"}) 
    //   },5000)
    }
    // render() {
    //     return ( 
    //       <h1 > My Favorite Color is {this.state.favoritecolor} </h1>,
    //     );
    // }
    render() {
      return ( 
        <div>
          <h1 > My Favorite Color is {this.state.favoritecolor} </h1>
          <button type="button" onClick={this.favoriteColor}>Change color</button>
        </div>
        
      );
  }
}
export default App;