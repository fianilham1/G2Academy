import React, { Component } from 'react';
import { Login, Register, UserList } from '../../page';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [
                {
                    id: 1,
                    name: 'Bobo',
                    username: 'bobo1@gmail.com',
                    password:'bobo123@'
                  }
            ]
        }
    }

    onAddHandler = () => { }
    renderList = () => { }
    
    updateUserList = users => {
        // const list = [  {
        //     'id': '1',
        //     'name': 'Bobo',
        //     'username': 'fianilham1@gmail.com',
        //     'password':'fian123@'
        //   }
        // ]
        // this.setState({
        //   userList: list
        // })
      }

      loginHandler = loggedUser => {
        this.props.onLogin(loggedUser);
      }

      addNewUserHandler = newUser => {
        let userCopy = JSON.parse(JSON.stringify(this.state.userList))
        let userInputNew = {
            id: userCopy[userCopy.length-1].id+1,
            name: newUser.name,
            username: newUser.username,
            password: newUser.password
        }

        userCopy.push(userInputNew)
    
        this.setState({ userList: userCopy});
       
        console.log("call add new in MAIN LIST:",userInputNew)
      }

      editUserHandler = editedUser => {
        let userCopy = JSON.parse(JSON.stringify(this.state.userList))
        userCopy[`${editedUser.row-1}`].name = editedUser.name;
        userCopy[`${editedUser.row-1}`].username = editedUser.username;
        userCopy[`${editedUser.row-1}`].password = editedUser.password;
       
        this.setState({ userList: userCopy});
      }

      deleteUserHandler = deletedRow => {
        let userCopy = JSON.parse(JSON.stringify(this.state.userList))
        userCopy.splice(deletedRow-1, 1)
       
        this.setState({ userList: userCopy});
      }


    renderPage = () => {
        const page = this.props.page;
        const {loggedUser, loginStatus} = this.props;
        console.log("COKKKKKKKKKKKKKKKK",this.state.userList)
        if (page === "register")
            return <Register onAddNewUser={this.addNewUserHandler}/>

        if (page === "userList" && !loginStatus)
            return <Login onLogin={this.loginHandler} dataUser={this.state.userList}/>

        if (page === "userList")
            return <UserList dataUser={this.state.userList} onEditUser={this.editUserHandler} onDeleteUser={this.deleteUserHandler} loggedUser={loggedUser}/>

        if (page === "login" && loginStatus)
            return <UserList dataUser={this.state.userList} onEditUser={this.editUserHandler} onDeleteUser={this.deleteUserHandler} loggedUser={loggedUser}/>

        return <Login onLogin={this.loginHandler} dataUser={this.state.userList}/>
    }

    render() {
        console.log("currentUSERLIST",this.state.userList)
        return (
            <div className="body">
                {this.renderPage()}
                {/* <button onClick={this.onAddHandler}>Add New</button>
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table> */}
            </div>
        );
    }
}

export default Body;