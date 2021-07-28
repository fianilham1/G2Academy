import React, { Component } from 'react';

class CellTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    renderButton = () => {
        const { number, onClickEvent, text, totalCurrentRowPage, addClassType} = this.props;
        if (addClassType==="action") return <button name={totalCurrentRowPage} className={number} id={`${text.toLowerCase()}Button`} onClick={onClickEvent}>{text}</button>

        return ''
    }
    render() { 
        const {data, number, addClassType} = this.props;

        return ( 
            <div className={`cell ${addClassType ? addClassType : ''}`}>
                {number && addClassType==="num" ? number : data}
                {this.renderButton()}
            </div>
         );
    }
}
 
export default CellTable;