import React, { Component } from 'react';
import "./input.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { focusState, icon, name, focus, blur, typeTx, defaultValue } = this.props
        return (
            <>
            <div className={`input-div${ focusState[`isFocus${name}`] ? ' focus' : ''}`}>
                <div className="i">
                    {icon}      
                </div>
                <div>
                    <h5>{name}</h5>
                <input id={`isFocus${name}`} className="input" type={typeTx} onFocus={focus} onBlur={blur} name={name.toLowerCase()} defaultValue={defaultValue}/>
                </div>
            </div>
            </>
        );
    }
}

export default Menu;