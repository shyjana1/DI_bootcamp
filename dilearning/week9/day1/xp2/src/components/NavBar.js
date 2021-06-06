import React from 'react';
import {Link} from 'react-router-dom';
// import Home from './'
// import Profile from './profile'
// import Shop from './shop'
const NavBar = ()=>{
    return(
        <>
            <Link to='/'>Home </Link>
            <Link to='/profile'>Profile </Link>
            <Link to='/shop'>Shop </Link>
        </>
    )
}
export default NavBar;