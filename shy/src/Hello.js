import React from 'react';
import './hello.css'; // the child overwrites the parent (the red color overwrites green)
import Button from 'react-bootstrap/Button';


const Hello = () => {
    return (
        <div>
            <Button variant="primary">Primary</Button>
            <div className="green">
            {/* <h2>{name}</h2>
            <p>{email}</p> */}
            </div>
        </div>
    )
}

export default Hello;