import React from 'react';
import Lower from './Lower'
class Myform extends React.Component{
    constructor(){
        super()
        this.state = {
            fname:'',
            lname:'',
            age:'',
            gender:'',
            dest:'',
            nuts:'',
            lactose:'',
            vegan:'',
        }
    }

info = (e)=>{
    

let getid = e.target.id
    let data = e.target.value
    switch (getid) {
      case "fn":
        this.setState({ fname: data })
        break;
      case "ln":
        this.setState({ lname: data })
        break;
      case "age":
        this.setState({ age: data })
        break;
      case "m":
        this.setState({ gender: data })
        break;
      case "f":
        this.setState({ gender: data })
        break;
      case "nu":
        if(data===this.state.nuts){
        this.setState({ nuts: '' })
        }
        else this.setState({ nuts: data })
        break;
      case "la":
        if(data===this.state.lac){
          this.setState({ lac: '' })
          }
          else this.setState({ lac: data })
        break;
      case "ve":
        if(data===this.state.vegan){
          this.setState({ vegan: '' })
          }
          else this.setState({ vegan: data })
        break;
      default:
    }
}
    render(){
    return(

        <div>
        <form>
        <input id="fn"className="fname" name="fname" onChange={this.info} placeholder="First Name" /><br></br>
        <input id="ln"className="lname" name="lname" onChange={this.info} placeholder="Last Name" /><br></br>
        <input id="age"className="age" name="age" onChange={this.info} placeholder="Age" /><br></br>
        <input id="m"className="gender" type="radio" onChange={this.info} name="gender" placeholder="Male" />Male
        <input id="f"className="gender" type="radio" onChange={this.info} name="gender" placeholder="Female" />Female <br></br>
        Select your destination<select onChange={this.info} name="dest" >
            <option>Argentina</option>
            <option>Israel</option>
            <option>UK</option>
        </select><br></br>
        Dietary Restrictions: <br></br><input type="checkbox" id="nu"onChange={this.info} name="nuts" value="nuts"/>Nuts free<br></br>
        <input type="checkbox" name="lactose" id="la" onChange={this.info} value="lactose" />Lactose free<br></br>
        <input type="checkbox" name="vegan" id="ve" onChange={this.info} value="vegan" />Vegan

        </form>
        <Lower info={this.state} />
        {/* {this.state.name} */}
        </div>
    )
}
}
export default Myform;