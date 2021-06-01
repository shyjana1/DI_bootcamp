// import React from 'react';

// class App extends React.Component {
  
//   // step 1
//     constructor(props) {
//         // console.log(1);
//         super(props);
//         // this.state = { favoritecolor: "red", show: true};
//         this.state = { show: true};

//     }

//     // step 3
//     componentDidMount() {
//         // console.log(2);
//         setTimeout(() => {
//             this.setState({ favoritecolor: "yellow" })
//         }, 2000)
//     }
//     // step 5
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         // console.log(3);
//         document.getElementById("div1").innerHTML =
//             "Before the update, the favorite was " + prevState.favoritecolor;
//     }
//     // step 6
//     // componentDidUpdate() {
//     //     // console.log(4);
//     //     document.getElementById("div2").innerHTML =
//     //         "The updated favorite is " + this.state.favoritecolor;
//     // }

//     // step 2, step 4
//     render() {
//         // console.log(5);
//         return (
//       <div>
      
//         <h1> My Favorite Color is { this.state.favoritecolor } </h1>
//          <div id = "div1" > </div>
//           <div id = "div2" > </div> 
//       </div>
//         );
//     }
    
// }
// class Child extends React.Component {
//   componentWillUnmount(){
//     alert("this is alert from eitan")
//   }
//   render() {
//     return(
//     <h1>Hello world</h1>
//     )
//   }

// }

import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }
    delHeader = () => {
        this.setState({ show: false });
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = < Child / > ;
        };
        return ( <div > { myheader } <button type = "button"
            onClick = { this.delHeader } > Delete Header </button> </div>
        );
    }
}
class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return ( <h1 > Hello World! </h1>
        );
    }
}
export default App;