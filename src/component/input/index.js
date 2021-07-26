import React, { Component } from 'react';
import "./input.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { icon, input, focus, blur, index, typeTx } = this.props
        return (
            <>
            <div className="i">
                {icon}      
            </div>
            <div>
                <h5>{input[index]}</h5>
            <input id={`isFocus${input[index]}`} className="input" type={typeTx} onFocus={focus} onBlur={blur} name={input[index].toLowerCase()}/>
            </div>
            </>
        );
    }
}

export default Menu;