import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbo from './components/Jumbotron'
import Alert from './components/Alert'

function App() {
// exercise 1+2
//  const PrintHello= () => {
//   const element = <h1> I Love React </h1>
//   return (
//     element
//   )
// }

// exercise 3
// const BootstrapCard = (props) => {

//   return (

// <div className="card m-5" style={{width: '30rem'}}>
//   <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card image cap" />
//   <div className="card-body">
//     <h5 className="card-title">Bob Dylan</h5>
//     <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
//     <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
//     <a href="http://twitter.com">Take me to twitter</a>

//   </div>

// </div>

//   )
// }

// const BootstrapCard1 = ({title,description,imageUrl,}) => {
  
  return (
//  <>
// <div className="card m-5" style={{width: '30rem'}}>
//   <img className="card-img-top" src={imageUrl} alt="Card image cap" />
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{description}</p>
//     <a href="" className="btn btn-primary">Go to wikipedia</a>
//     <a href="http://twitter.com">Take me to twitter</a>

  
//   </div>

// </div>

// //   )
// // }
   <>
    <Jumbo
        title="Welcome to react"
        description="React is the most popular rendering library in the world"
        // buttonLabel="Go to the official website"
        // buttonURL="https://reactjs.org/"
        />
    <Alert 
        text1="OMG! Something really bad has happended!"
        />
    <Alert 
        text2="This is a primary alert—check it out!"
        />
    <Alert 
        text3="OMG! Something really bad has happended!"
        />
  </>
  )
}
export default App;
