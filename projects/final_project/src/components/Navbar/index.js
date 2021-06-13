import React from 'react'
import { Nav,NavLink,Bars, NavIcon, } from './Navbar'
// import SidebarContainer from '../Sidebar'
const myIcon = ()=>{
    toggle = true;
  }
const Navbar = ({toggle})=>{
    return(
        <>
        <Nav>
            <NavLink to='/'>Sharoni BreadnSpread  <br></br>    Vegan Lickin' Good</NavLink>
            
            <NavIcon onClick={()=>myIcon()}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>
        </>
    )
}

export default Navbar