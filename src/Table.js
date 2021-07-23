
import './Todo.css';
import Pagination from './Pagination';

import React, { Component } from 'react';

const Header = () => {
    return ( 
    <div class="row">
        <div class="cell header">No</div>
        <div class="cell header">Photo Name</div>
        <div class="cell header">Album Name</div>
        <div class="cell header">User</div>
        <div class="cell header">Thumbnail</div>
    </div>
    );
};

const Body = (dataArr,startIndex) => {
    return dataArr.map((data) => (
        <div class="row">
            <div class="cell num">{startIndex++}</div>
            <div class="cell">{data.photoName}</div>
            <div class="cell">{data.albumName}</div>
            <div class="cell">{data.user}</div>
            <div class="cell">
                <img class="myImg" src={data.thumbnail} onClick="imgPop('${photos.url}')" />
            </div>
        </div>
        ));
};

let currentPage = 1;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handlePage(val){
    // let pageConfigCopy = JSON.parse(JSON.stringify(this.state.pageConfig))
    // pageConfigCopy.currentPage = parseInt(val)
   
    // this.setState({ pageConfig: pageConfigCopy});
    // this.props.onSelectPage(val);
    console.log("call page in table:",val) 
    currentPage = val;
  }
  render() { 
    const { data } = this.props;
    let userData = data.user;
    let pageConfigData = data.pageConfig;
    let filteredData = [];
    let entries = data.pageConfig.currentEntries;
    let current = data.pageConfig.currentPage;
    let startIndex = (entries)*(current-1);
    let endIndex = (entries)+(entries)*(current-1);

    console.log("cek:",userData)
    for(let i = startIndex;i < endIndex;i++){
        if(i<userData.length){ //limit to user data length
            const data = userData[i];
            filteredData.push(data);
        }        
    }

    let showData = Body(filteredData,startIndex+1);
     
    //   if(userData.length==0){
    //     table = HeaderRow;
    //   }
     
    return ( 
      <React.Fragment>
        <div class="tbl">
          <Header />
          {showData}
        </div>

        <Pagination data={data} onSelectPage={this.handlePage}/>
      
      </React.Fragment>
     );
  }
}
 
export default Table;