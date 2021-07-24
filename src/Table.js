
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
        <div class="cell header">Action</div>
    </div>
    );
};

// const Body = (dataArr,startIndex) => {
//     return dataArr.map((data) => (
//         <div class="row">
//             <div class="cell num">{startIndex++}</div>
//             <div class="cell">{data.photoName}</div>
//             <div class="cell">{data.albumName}</div>
//             <div class="cell">{data.user}</div>
//             <div class="cell">
//                 <img class="myImg" src={data.thumbnail} onClick={this.handleImgPop(data.url)} />
//             </div>
//         </div>
//         ));
// };

let currentPage = 1;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        isOpen : false,
        url : '',
        isEdit : {
          no:-1,
          status:false
        },
        isAddNew : false,
        data : {
        'row': '',
        'photoName': '',
        'albumName': '',
        'user':''
        },
        addData : {
          'id': '',
          'photoName': '',
          'albumName': '',
          'user':'',
          "url": "https://via.placeholder.com/600/92c952",
          'thumbnail':'https://via.placeholder.com/150/92c952'
          }
     }
     this.handlePage = this.handlePage.bind(this);
     this.handleImgPop = this.handleImgPop.bind(this);
     this.handleClose = this.handleClose.bind(this);
  }
  handleImgPop(valUrl){
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ url: valUrl });
    console.log("cekurl",valUrl)
  }
  handleClose(){
    this.setState({ isOpen: !this.state.isOpen });
  }
  handlePage(val){
    this.props.onSelectPage(val);
    console.log("call page in table:",val) 
    currentPage = val;
  }
  handleEdit = e => {
      console.log(e.target.className)
      let isEditCopy = {
        no:parseInt(e.target.className)-1,
        status:true
      }
      this.setState({ isEdit: isEditCopy });
      // console.log("Row-i:",e.target.parentElement.parentElement)
  }
  handleSave = e => {
    // console.log("Row-i:",e.target.parentElement.parentElement)
    if(this.state.addData.photoName=='' || this.state.addData.albumName=='' || this.state.addData.user==''){
      return alert("Please FIll All the Fields!!")
    }
    let isEditCopy = {
      no:-1,
      status:false
    }
    this.setState({ isEdit: isEditCopy });
    let row = e.target.className;

    let updateDate = {
      'row': row,
      'photoName': this.state.data.photoName,
      'albumName': this.state.data.albumName,
      'user':this.state.data.user
    }

    this.props.onUpdateDate(updateDate);
    
  }
  handleDelete = e => {
    let deletedRow = parseInt(e.target.className);
    const { data } = this.props;
    if(data.user.length!=0){ //left header only
      if(deletedRow == data.user.length){ 
        data.pageConfig.currentPage -= 1;
      }
  
      this.props.onDelete(deletedRow);
      this.props.onSelectPage(data.pageConfig.currentPage);
    }
    
  }
  handleChange = e => {
    // console.log(e.target.value)
    let property = `${e.target.name}`;
    this.setState(prevState => {
      let data = { ...prevState.data };    // creating copy of state variable 
      data[property] = `${e.target.value}`;// update the name property, assign a new value                 
      return { data };                     // return new object 
    })
  }
  handleChangeAdd = e => {
    // console.log(e.target.value)
    let property = `${e.target.name}`;
    this.setState(prevState => {
      let addData = { ...prevState.addData };    // creating copy of state variable 
      addData[property] = `${e.target.value}`;// update the name property, assign a new value                 
      return { addData };                     // return new object 
    })
  }
  keyPress = e => {

    if(this.state.addData.photoName=='' || this.state.addData.albumName=='' || this.state.addData.user==''){
      console.log("ALERT")
      return alert("Please FIll All the Fields!!")
    }

    if(e.keyCode == 13){ //enter key
       console.log('value', e.target.value);

       let property = `id`;
        this.setState(prevState => {
          let addData = { ...prevState.addData };    // creating copy of state variable 
          addData[property] = 17;// update the name property, assign a new value                 
          return { addData };                     // return new object 
        })
  
      this.props.onAddData(this.state.addData);
    }
 }
  render() { 
    const { data } = this.props;
    let userData = data.user;
    let pageConfigData = data.pageConfig;
    let isAddStatus = data.isAddNew;

    let filteredData = [];
    let entries = data.pageConfig.currentEntries;
    let current = data.pageConfig.currentPage;
    let startIndex = (entries)*(current-1);
    let endIndex = (entries)+(entries)*(current-1);

   
    for(let i = startIndex;i < endIndex;i++){
        if(i<userData.length){ //limit to user data length
            const data = userData[i];
            filteredData.push(data);
        }        
    }
    console.log("cek:",isAddStatus)
    if(isAddStatus){
      let addData = {
        'id': userData[userData.length-1].id,
        'photoName': '',
        'albumName': '',
        'user':'',
        "url": "https://via.placeholder.com/600/92c952",
        'thumbnail':'https://via.placeholder.com/150/92c952'
      }
      filteredData.unshift(addData); //add new element in the first index
    }
    startIndex++;
    let showData = filteredData.map((data,index) => {
      if(index==0 && isAddStatus) return(
      <div class="row">
        <div class="cell num">{userData.length+1}</div>
        <div class="cell">
          <input type='text' name="photoName" onKeyUp={this.keyPress} onChange={this.handleChangeAdd}/>
        </div>
        <div class="cell">
          <input type='text' name="albumName" onKeyUp={this.keyPress} onChange={this.handleChangeAdd}/>
        </div>
        <div class="cell">
          <input type='text' name="user" onKeyUp={this.keyPress} onChange={this.handleChangeAdd}/>
        </div> 
        <div class="cell">
        </div>
        <div class="cell action">
        </div>
      </div>
      )
      if(index == this.state.isEdit['no'] && this.state.isEdit['status']) return(
      <div class="row">
        <div class="cell num">{startIndex++}</div>
        <div class="cell">
          <input type='text' name="photoName" onChange={this.handleChange}/>
        </div>
        <div class="cell">
          <input type='text' name="albumName" onChange={this.handleChange}/>
        </div>
        <div class="cell">
          <input type='text' name="user" onChange={this.handleChange}/>
        </div> 
        <div class="cell">
            <img class="myImg" src={data.thumbnail} onClick={() => this.handleImgPop(data.url)} />
        </div>
        <div class="cell action">
          <button class={startIndex-1} id="editButton" onClick={this.handleEdit} style={this.state.isEdit['status'] ? { display: "none" } : {display: "block"}}>Edit</button>
          <button class={startIndex-1} id="saveButton" onClick={this.handleSave} style={this.state.isEdit['status'] ? { display: "block" } : {display: "none"}}>Save</button>
          <button class={startIndex-1} id="deleteButton" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
      )

      return (
      <div class="row">
        <div class="cell num">{startIndex++}</div>
        <div class="cell">{data.photoName}</div>
        <div class="cell">{data.albumName}</div>
        <div class="cell">{data.user}</div>
        <div class="cell">
            <img class="myImg" src={data.thumbnail} onClick={() => this.handleImgPop(data.url)} />
        </div>
        <div class="cell action">
          <button class={startIndex-1} id="editButton" onClick={this.handleEdit}>Edit</button>
          <button class={startIndex-1} id="saveButton" onClick={this.handleSave} class="save">Save</button>
          <button class={startIndex-1} id="deleteButton" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
      )
        
    });
     
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

        <div id="myModal" className="modal" style={this.state.isOpen ? { display: "block" } : {display: "none"}}>
          <span className="close" onClick={this.handleClose}>&times;</span>
          <img className="modal-content" id="img01" src={this.state.url}/>
          <div id="caption"></div>
        </div>
      
      </React.Fragment>
     );
  }
}
 
export default Table;

// const eventAddNew = () => {
//   document.querySelector(".tbl").addEventListener('keyup', e => {
//       // console.log("e?",e)
//       if (e.key === "Enter") saveData()
//   })
// }
