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


const Sidebar = ({  }) => {
  let open = false;
  const myIcon = ()=> {
    if(open = false) {
      open = true;
      console.log("hi");
  }
  else{
    open = true;
  }
}
  return (
    <SidebarContainer open={open} >
    <NavIcon id="challangedAmichai" onClick={()=>myIcon()}>
      <Icon >
        <CloseIcon />
      </Icon>
      </NavIcon>
      <SidebarMenu >
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