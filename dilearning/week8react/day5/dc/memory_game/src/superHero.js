// import React from 'react'
// import characters from "./superheroes.json";
// import './App.css';

//  class Superhero extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             superheroes: characters.superheroes,
//             random: 0
//         };
        
//         }
//         stateChange= (id) => {
//             this.state.superheroes[--id].clicked = true;
//             console.log(this.state.superheroes);
//         }
//         render() {
//             console.log(this.state.superheroes);
//             this.state.superheroes.map((item,i)=>{
                
//             // })
//             // for (let i = 0; i < 12; i++) {
//                 // console.log("hey");
//                 return (<div id="container">
//                         <div id="card" onClick={()=>this.stateChange(item[i].id)}>
//                         <img className="image" src={this.state.superheroes[i].image}></img>
//                         <p>{this.state.superheroes[i].name}</p>
//                         <p>{this.state.superheroes[i].occupation}</p>
                     

                        
//                    {/* </div>
//                    <div onClick={()=>this.stateChange(this.state.superheroes[1].id)}>
//                         <img className="image" src={this.state.superheroes[1].image}></img>
//                         <p>{this.state.superheroes[1].name}</p>
//                         <p>{this.state.superheroes[1].occupation}</p>
//                       */}

                        
//                         </div>
//                     </div>

//                    )
//                     // }
//         })

//     }
// }