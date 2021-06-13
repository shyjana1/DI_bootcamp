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

const myIcon = ()=>{
  console.log("ziv");
}
const Sidebar = ({ isOpen, toggle }) => {
  
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <NavIcon  onClick={()=>myIcon()}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      </NavIcon>
      <SidebarMenu>
        <SidebarLink to='/'>Bread</SidebarLink>
        <SidebarLink to='/'>Spread</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;