import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class App extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://bit.ly/3fAxcMM" />
                    <p className="carousel1">carousel 1</p>
                </div>
                <div>
                    <img src="https://bit.ly/3wMy2LN" />
                    <p className="legend">Legend 2</p>
                </div>
                
                
            </Carousel>
        );
    }
};



export default App;
