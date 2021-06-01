import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Jumbo= (props) =>{
        
return (
    <div>
        <div className="card m-5" style={{width: '30rem'}}>
            <div className="card-body bg-light">
                <h1 className="card-title">{props.title}</h1>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
       </div>
    </div>
    ) 
}

export default Jumbo;