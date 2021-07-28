
import './Todo.css';
import Pagination from './Pagination';
import { RowTable } from '../../component';

import React, { Component } from 'react';

const Header = () => {
    return ( 
    <div class="row">
        <div class="cell header">No</div>
        <div class="cell header">Name</div>
        <div class="cell header">Username</div>
        <div class="cell header">Password</div>
        <div class="cell header">Action</div>
    </div>
    );
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        isEdit : {
          no:-1,
          status:false
        },
        isAddNew : false,
        data : {
        row: '',
        name: '',
        username: '',
        password:''
        },
        addData : {
          id: '',
          name: '',
          username: '',
          password:''
        },
        loggedUser : {
          name: '',
          username: '',
          password:''
        }
     }
   
  }

  componentDidMount() {
    const { loggedUser } = this.props;
    this.setState({loggedUser:loggedUser})
  }

  handlePage = val => {
    this.props.onSelectPage(val);
    console.log("call page in table:",val) 
  }

  handleEdit = e => {
      console.log(e.target.className)
      console.log("LOGGED-IN-TABLE",this.state.loggedUser)

      let isEditCopy = {
        no:parseInt(e.target.className)-1,
        status:true
      }

      let updateData = { //default DATA
        row: e.target.className,
        name: this.state.loggedUser.name,
        username: this.state.loggedUser.username,
        password: this.state.loggedUser.password
      }
    
      this.setState({ 
        isEdit: isEditCopy,
        data : updateData
      });

      this.props.onGoToEditForm(updateData);
      // console.log("Row-i:",e.target.parentElement.parentElement)
  }
  
  handleSave = e => {
    // console.log("Row-i:",e.target.parentElement.parentElement)
    // if(this.state.data.name==='' || this.state.data.username==='' || this.state.data.password===''){
    //   return alert("Please FIll All the Fields!!")
    // }
    
    let isEditCopy = {
      no:-1,
      status:false
    }
    this.setState({ isEdit: isEditCopy });
    let row = e.target.className;

    if(this.state.data.name!=='' || this.state.data.username!=='' || this.state.data.password!==''){
      let updateData = { //update DATA if any change detected
        row: row,
        name: this.state.data.name,
        username: this.state.data.username,
        password:this.state.data.password
      }
      this.props.onUpdateData(updateData);
      this.setState({loggedUser:updateData})
    }

    //clear all data
    this.setState(prevState => {
      let data = { ...prevState.data };    // creating copy of state variable 
      data['name'] = '';// update the name property, assign a new value   
      data['username'] = '';// update the name property, assign a new value   
      data['password'] = '';// update the name property, assign a new value                 
      return { data };                     // return new object 
    })
    
  }
  handleDelete = e => {
    const deletedRow = parseInt(e.target.className);
    const totalCurrentRowPage = parseInt(e.target.name);
    const { pageConfig, dataUser } = this.props;
    if(dataUser.length!==0){ //left header only
      console.log("CEK CURRENT PAGE BEFORE DELETE",pageConfig.currentPage)
      console.log("CEK BEFORE DELETE",totalCurrentRowPage)
      if(totalCurrentRowPage === 1 && pageConfig.currentPage!==1){ 
        pageConfig.currentPage -= 1;
      }
  
      this.props.onDelete(deletedRow);
      this.props.onSelectPage(pageConfig.currentPage);
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


  render() { 
    console.log("EDITCEK",this.state.totalRowPage)
    const { pageConfig, dataUser } = this.props;

    let filteredData = [];
    let entries = pageConfig.currentEntries;
    let current = pageConfig.currentPage;
    let startIndex = (entries)*(current-1);
    let endIndex = (entries)+(entries)*(current-1);
    console.log("pageconfig",pageConfig)
    for(let i = startIndex;i < endIndex;i++){
        if(i<dataUser.length){ //limit to user data length
            const user = dataUser[i];
            filteredData.push(user);
        }        
    }
  
    startIndex++;
    let showData = filteredData.map((data,index) => {
     
      if(data.username===this.state.loggedUser.username) return(
        <RowTable keyNum={index} startIndex={startIndex} data={data} onClickEvent={this.handleEdit} text={"Edit"} loggedUser={this.state.loggedUser.username}/>
      // <div class="row">
      //   <div class="cell num">{startIndex++}</div>
      //   <div class="cell">{data.name}</div>
      //   <div class="cell">{data.username}</div>
      //   <div class="cell">{data.password}</div>
      //   <div class="cell action">
      //     <button class={startIndex-1} id="editButton" onClick={this.handleEdit}>Edit</button>
      //     <button class={`save ${startIndex-1}`} id="saveButton" onClick={this.handleSave}>Save</button>
      //   </div>
      // </div>
      )
      return (
        <RowTable keyNum={index} startIndex={startIndex} data={data} onClickEvent={this.handleDelete} text={"Delete"} totalCurrentRowPage={filteredData.length} typeTx={"pass"}/>
      // <div class="row">
      //   <div class="cell num">{startIndex++}</div>
      //   <div class="cell">{data.name}</div>
      //   <div class="cell">{data.username}</div>
      //   <div class="cell pass">{data.password}</div>
      //   <div class="cell action">
      //     <button class={startIndex-1} id="deleteButton" onClick={this.handleDelete}>Delete</button>
      //   </div>
      // </div>
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

        <Pagination pageConfig={pageConfig} userList={dataUser} onSelectPage={this.handlePage}/>
      
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
