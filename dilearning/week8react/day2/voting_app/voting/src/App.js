import React from 'react';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {languages: [
        {id: 1, name: 'Php', votes: 0},
        {id: 2, name: 'Python', votes: 0},
        {id: 3, name: 'Java', votes: 0},
        {id: 4, name: 'Javascript', votes: 0},

      ],
      
    }
  }
  changeVotes = (params) => {
      let clone = [...this.state.languages]
      clone[params].votes++;
      this.setState({languages: clone})
  }
    render() {
      // console.log(this.state.counter);
      console.log(this.state.languages[0].name)
      return (
        <>
        <div>
          <h2>{this.state.languages.map((el, i)=>{
            return( 
            <div > <h3>{el.name}</h3>{el.votes} <button onClick ={()=>this.changeVotes(i)}>Click Here!</button></div>
          )
          })}</h2>
        </div>
        </>
    );
  }
}


export default App;
