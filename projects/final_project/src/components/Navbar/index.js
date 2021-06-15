import React from 'react'
import { Nav,NavLink,Bars, NavIcon, } from './Navbar'
// import SidebarContainer from '../Sidebar'
// const myIcon = ()=>{
//     const toggle = false;
//     const isOpen = true;
//     console.log("amichai");

//   }
const Navbar = ({toggle})=>{
    let open = false;
  const myIcon = ()=> {
      console.log(open);
      if(open == false) {
          open = true;
            // document.getElementById("challangedAmichai").style.display = "block";
  }
  else{
    open = false;
    // document.getElementById("challangedAmichai").style.display = "none";

  }
  console.log(open);
}
    return(
        <>
        <Nav>
            <NavLink to='/'>Sharoni BreadnSpread  <br></br>    Vegan Lickin' Good</NavLink>
            
            <NavIcon onClick={()=>myIcon()}>
                <button ></button>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>
        </>
    )
}

export default Navbar