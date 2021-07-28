import React, { Component } from 'react';
import CellTable from '../cellTable';

class RowTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {data, keyNum, startIndex, onClickEvent, text, typeTx, totalCurrentRowPage} = this.props;
        const number = startIndex+keyNum;
        return ( 
            <>
            <div class="row">
                <CellTable number={number} addClassType="num"/>
                <CellTable data={data.name}/>
                <CellTable data={data.username} />
                <CellTable data={data.password} addClassType={typeTx}/>
                <CellTable number={number} totalCurrentRowPage={totalCurrentRowPage} onClickEvent={onClickEvent} text={text} addClassType="action"/>
                {/* <div className="cell num">{number}</div>
                <div className="cell">{data.name}</div>
                <div className="cell">{data.username}</div>
                <div className={`cell ${typeTx ? typeTx : ''}`}>{data.password}</div>
                <div className="cell action">
                    <button name={totalCurrentRowPage} className={number} id={`${text.toLowerCase()}Button`} onClick={onClickEvent}>{text}</button>
                </div> */}
            </div>
            </>
         );
    }
}
 
export default RowTable;