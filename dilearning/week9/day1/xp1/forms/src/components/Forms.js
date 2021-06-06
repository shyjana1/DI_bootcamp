
import React, { Component } from 'react';

class Forms extends Component {
    // let { handleSubmit } = props
    constructor() {
        super();
        this.state = {
            author: '',
            age: '',
            email: ''
    };
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        
    }
    onChange = event => {
        const value = event.target.value;
        this.setState({ [event.target.id]: value })
    }
    resetForm = () => {
        this.setState({
            ...this.state,
            author: '',
            age: '',
            email: ''
        })
    }

      render() {

      
    return (
        <>
            <div className="box" >
            
            <form onSubmit={this.handleSubmit}>
                <label  htmlFor="name">Name</label>
                <input onChange={this.onChange}
                    id="author"
                    type="text"
                />
                <label htmlFor="age">Age</label>
                <input onChange={this.onChange}
                    id="age"
                    type="number"
                />
                <label htmlFor="email">Email</label>
                <input onChange={this.onChange}
                    id="email"
                    type="email"
                />
                <button type="submit">Submit</button>
            </form>
            </div>
            <div>{this.state.author}</div>
            <div>{this.state.age}</div>
            <div>{this.state.email}</div>
            <button  type="clear" onClick={this.resetForm}>clear</button>

        </>

    )
      
}
}

export default Forms;