import React, {Component} from 'react'
import './App.css';
// import axios from "axios";
class App extends Component {
        constructor(props) {
        super(props)
       this.state = { data:''};
            }
 async componentDidMount (){
try{
     const response = await fetch('http://localhost:4000/api/hello')
  const json = await response.json()
//   console.log(json);
  this.setState({ data: json });
}
catch(e) {
   console.log(e)
}
 }
render() {     
    const {data} =this.state; 
   //  console.log(data);   
    return ( 
<>
  <div className="col">
    <div>{data.data}</div>
   {/* <div> <b>{data.post}</b></div> */}
    <form>
       <label htmlFor=""></label>
       <input type='text' ></input>
    <button onClick={()=>this.handleclick}>Click</button>
    </form>
  </div>
</>
   )
}
 }
 export default App;