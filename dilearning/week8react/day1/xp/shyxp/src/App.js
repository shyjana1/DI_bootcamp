import logo from './logo.svg';
import './App.css';

function App() {
  // const myelement = <h1>I Love JSX!</h1>;
  // 4: 
  // const sum = 5+5;
  // 5:
  // const mylist = <ul>
  // <li>apples</li>
  // <li>bananas</li>
  // <li>cherries</li>
  // </ul>

  // 7:
  // const myform = <form>
  //   <input></input>
  // </form>
  // 8:
  const user = {name: 'john', age: 12}
  return (
    // exercise 1:
    // <div className="App">
      // {/* <header className="App-header"> */}
        // {/* <h1>Hello World</h1> */}
        // exs 2:
    // myelement
    // 3:
        // <div className="notJSX">
        //   <h1>I do not like JSX!</h1>
      // 4:
        // sum
      // 5:
    // mylist
    // 6:
    // <div className="App">

    //   <header className="App-header">
    //      <h1>Hello World</h1>
    //      <h1>I am a header too</h1>
    // 7:
    // myform
    // 8:
    `${user.name} is ${user.age} years old`

        
    //  </header>
    // </div>
  );
}

export default App;
