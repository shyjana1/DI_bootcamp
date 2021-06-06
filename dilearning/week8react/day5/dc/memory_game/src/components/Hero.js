import React from 'react'

const Hero = ({hero}) =>{
    const {name, occupation, image, id} = hero;
    return (
        <div>
            <div className="hero" style={{backgroundImage: `url(${image})`}}>
            </div>
            <div>
                <img src={image} />
                <h4>{name}</h4>
                <p>{occupation}</p>
            </div>
        </div>
    )
}
export default Hero;