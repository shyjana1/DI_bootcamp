import React from 'react';
//Exercise 1: OnClick
// import './App.css';
// class App extends React.Component {
//     shoot() {
//         alert("Great Shot!");
//     }
//     render() {
//         return ( <
//             button onClick = { this.shoot } > Take the shot! < /button>
//         );
//     }
// }
// export default App;
//Exercise 2:
// import React from 'react';
// import './App.css';
// class App extends React.Component {
//   shoot() {
//     alert("Great Shot!");
//   }
//   shoot1() {
//     alert("Nice Shot!");
//   }
//   render() {
//     return (
//       <div>
//       <button onClick={this.shoot}>Take the shot!</button>,
//       <button onClick={this.shoot1}>take another shot!</button>
//       </div>
//     );
//   }
// }
// export default App;
//Exercise 3
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.shoot = this.shoot.bind(this)
//     }
//     shoot() {
//         alert(this);
//         /*
//         Thanks to the binding in the constructor function,
//         the 'this' keyword now refers to the component object
//         */
//     }
//     render() {
//         return ( <
//             button onClick = { this.shoot } > Take the shot! < /button>
//         );
//     }
// }
// export default App;
//Exercise 4: Arrow Function
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.shoot = this.shoot.bind(this)
//     }
//     shoot() {
//         alert(this);
//     }
//     shoot3 = () => {
//         alert(this);
//     }
//     render() {
//         return ( <
//             div > <
//             button onClick = { this.shoot } > Take the shot! < /button> <
//             button onClick = { this.shoot3 } > Take the shot! < /button> < /div >
//         );
//     }
// }
// export default App;
///Exercise 5: Arguments
// class App extends React.Component {
//     shoot = (a) => {
//         alert(a);
//     }
//     render() {
//         return ( <
//             button onClick = {
//                 () => this.shoot("Goal")
//             } > Take the shot! < /button>
//         );
//     }
// }
// export default App;
///Exercise 6: Bind
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.shoot = this.shoot.bind(this)
//     }
//     shoot5() {
//         alert(this);
//     }
//     render() {
//         return ( <
//             button onClick = { this.shoot5 } > Take the shot! < /button>
//         );
//     }
// }
// export default App;
///Exercise 6: Bind
// class App extends React.Component {
//     render() {
//         return ( <
//             button onClick = {
//                 (ev) => this.shoot("Goal", ev)
//             } > Take the shot! < /button>
//         );
//     }
// }
// export default App;
//<Exercise 8: OnKeyPress/button>
// class App extends React.Component {
//         render() {
//             return ( < form > < input type = "text"
//                 placeholder = "press the Enter Key" > < /form>);
//             }
//         }
//         export default App;
//<Exercise 9: Toggle/n>
// class App extends RbuttoOnKeyPress/n>eact.Component {
//         render() {
//             return ( < form > < input type = "text"
//                 placeholder = "press the Enter Key" > < /form>);
//             }
//         }
//         export default App;