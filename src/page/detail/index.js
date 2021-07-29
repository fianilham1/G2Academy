import React, { Component } from 'react';
import "./detail.css"

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderAllowance = () => {
        const {detailUser} = this.props;
        if (detailUser.role==="Manager"){
            return ( 
            <div className="rowDetail"> 
                <div className="cellDetail">Allowance of Entertaint</div>
                <div className="cellDetail">Rp{detailUser.allowance.entertaint}</div>
            </div>
            )
        }
        return <>
            <div className="rowDetail"> 
                <div className="cellDetail">Allowance of Food</div>
                <div className="cellDetail">Rp{detailUser.allowance.food}</div>
            </div>
            <div className="rowDetail"> 
                <div className="cellDetail">Allowance of Transport</div>
                <div className="cellDetail">Rp{detailUser.allowance.transport}</div>
            </div>
        </>
    }
    render() { 
        const {detailUser} = this.props;
        console.log("DETAIL",detailUser.allowance)
        return ( 
            <>
            <div className="detailbg">
                <h2>Detail Salary For {detailUser.name}</h2>
                <div className="detail-container">
                <div className="rowDetail"> 
                    <div className="cellDetail header">Details</div>
                    <div className="cellDetail header">Amount</div>
                </div>
                <div className="rowDetail"> 
                    <div className="cellDetail">Total Salary</div>
                    <div className="cellDetail">Rp{detailUser.allowance.entertaint ? detailUser.mainSalary + detailUser.allowance.entertaint : detailUser.mainSalary + detailUser.allowance.food + detailUser.allowance.transport}</div>
                </div>
                <div className="rowDetail"> 
                    <div className="cellDetail">Main Salary</div>
                    <div className="cellDetail">Rp{detailUser.mainSalary}</div>
                </div>
                {this.renderAllowance()}
                </div>
            </div>
            </>
         );
    }
}
 
export default Detail;