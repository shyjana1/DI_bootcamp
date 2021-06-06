import React from 'react'
const Header = (props) => {
    return(
        <>
        <div onClick={() =>this.navigate('home')}>Home</div>
        <div onClick={() =>this.navigate('about')}>About</div>
        <div onClick={() =>this.navigate('contact')}>Contact</div>
        </>
    )
}

export default Header;