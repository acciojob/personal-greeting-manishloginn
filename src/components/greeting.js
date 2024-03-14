import React, { Component } from "react";
// import Counter  from "./counter";



class Greeting extends Component {


    constructor(props) {
        super(props);
        this.state = { value: ''}
  
    }

     changedText = (e) => {
        
        const newValue = e.target.value;
        
        this.setState({value : newValue});
    }


    render() {
        return (
            <div>
                <label htmlFor="input">Enter your name:</label>
                <br/> <br/>
                <input 
                type="text"
                id = "input"
                value={this.state.value}
                onChange={this.changedText}
                />
                <p>{this.state.value ? "Hello " + this.state.value + "!" : null}</p>
            </div>
        );
    }
}

export default Greeting;