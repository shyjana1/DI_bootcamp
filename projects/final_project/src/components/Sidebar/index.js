import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './Sidebar';
import NavIcon from '../Navbar'
// import './styles.css'
import {useState} from 'react'

const Sidebar = ({  }) => {
  const [ open, setOpen] = useState(false)

  const myIcon = ()=> {

    if(open === false) {
      setOpen = true;
      console.log(open);
  }
  
}
  return (

    <SidebarContainer >
    <NavIcon id="button" onClick={()=>myIcon()}>
      <Icon >
        <CloseIcon />
      </Icon>
      </NavIcon>

      { if(open === true) {
           <>
      <SidebarMenu >
        <SidebarLink to='/'>Bread</SidebarLink>
        <SidebarLink to='/'>Spread</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
      </>
      } else {
        return null
      }  
    }
    </SidebarContainer>
  );
};

export default Sidebar;