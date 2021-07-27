import React, { Component } from 'react';
import { Header, Nav, Body } from './template';
import "./App.css"
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:false,
      isEdit:false,
      currentPage: "login",
      userInputName: "",
      userInputAge: "",
      userInputAddress: "",
      currentLoggedUser: {
        username: "",
        password: ""
      }
    }
  }

  changePage = page => {
    // if (page === "prohibited"){
    //   return alert("Please Sign In First!!!")
    // }
    if (page === "logout"){
      const clearLoggedUser = {
        username: "",
        password: ""
      }
      this.setState({
        isLogin: false,
        currentLoggedUser:clearLoggedUser,
        currentPage: "login"
      })
      return Swal.fire({
        icon: 'success',
        title: 'Logout',
        showConfirmButton: false,
        timer: 1500
      })
    }
    this.setState({
      currentPage: page
    })
  }
  loginHandler = loggedUser => {
   this.setState({
      isLogin:true,
      currentLoggedUser:loggedUser,
      currentPage: "userList"
    })
  //  this.setState({currentLoggedUser:loggedUser})
   console.log("current logged User",loggedUser)
  }

  updateLoggedHandler = edittedLoggedUser => {
    this.setState({
      currentLoggedUser:edittedLoggedUser})
  }

  GoToEditFormHandler = () => {
    this.setState({
      currentPage: "register",
      isEdit:true
    })
  }

  editStatusHandler = () => {
    this.setState({
      currentPage: "userList",
      isEdit:false
    })
  }

  render() {
    console.log("LOGGED",this.state.currentLoggedUser)
    console.log("logging status",this.state.isLogin)
    return (
      <>
        <Header />
        <Nav page={this.state.currentPage} goToPage={this.changePage} loginStatus={this.state.isLogin} loggedUser={this.state.currentLoggedUser}/>
        <Body page={this.state.currentPage} onLogin={this.loginHandler} loginStatus={this.state.isLogin} loggedUser={this.state.currentLoggedUser} updateLoggedUser={this.updateLoggedHandler} onGoToEditForm={this.GoToEditFormHandler} isEdit={this.state.isEdit} onEditStatus={this.editStatusHandler}/>
        {/* <button onClick={() => this.changePage("about")}>Change</button> */}
      </>
    )
  }
}

export default App;


/**
 * ======== KONSEP NAVIGATION ========
 * App: <= buat state disini
 *    - Nav:
 *          - Menu
 *    - Body
 */
