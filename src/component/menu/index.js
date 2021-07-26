import React, { Component } from 'react';
import "./menu.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { isActivePage, redirect, children } = this.props
        return (
            <div className={`menu ${isActivePage}`} onClick={redirect} >{children}</div>
        );
    }
}

export default Menu;