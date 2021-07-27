import React, { Component } from 'react';
import { Login, Register, UserList } from '../../page';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editRow:0,
            userList: [
                // {
                //     id: 1,
                //     name: 'Bobo',
                //     username: 'bobo1@gmail.com',
                //     password:'bobo123@'
                // }
            ]
        }
    }

    componentDidMount(){
        const urlFetch = fetch('https://jsonplaceholder.typicode.com/users')
        urlFetch.then( res => {
           if(res.status === 200)
              return res.json()   
        }).then( resJson => {
            const dataArr = resJson.map((data, index) => {
                return (
                  {
                    name:data.name,
                    username:data.username,
                    password:'12345',
                    address:data.address.city
                  }
                );
            }) 
            console.log("JSONDATA:",dataArr)
           this.setState({
            userList: dataArr
           })
        })
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
        let row = this.state.editRow;
        userCopy[`${row-1}`].name = editedUser.name;
        userCopy[`${row-1}`].username = editedUser.username;
        userCopy[`${row-1}`].password = editedUser.password;
       
        this.setState({ userList: userCopy});
        this.props.updateLoggedUser(editedUser);
        this.props.onEditStatus();
      }

      deleteUserHandler = deletedRow => {
        let userCopy = JSON.parse(JSON.stringify(this.state.userList))
        userCopy.splice(deletedRow-1, 1)
       
        this.setState({ userList: userCopy});
      }

      GoToEditFormHandler = editedUserDefault => {
        this.props.onGoToEditForm()
        //get default edit
        this.setState({editRow:editedUserDefault.row})
      }


    renderPage = () => {
        const {loggedUser, page, isEdit} = this.props;
        console.log("CURRENT LIST MAIN:",this.state.userList)
        if (page === "register")
            return <Register onAddNewUser={this.addNewUserHandler} editStatus={isEdit} onEditUser={this.editUserHandler} />

        if (page === "userList")
            return <UserList dataUser={this.state.userList} onDeleteUser={this.deleteUserHandler} loggedUser={loggedUser} onGoToEditForm={this.GoToEditFormHandler}/>

            // return <UserList dataUser={this.state.userList} onEditUser={this.editUserHandler} onDeleteUser={this.deleteUserHandler} loggedUser={loggedUser} onGoToPageForm={this.GoToPageFormHandler}/>

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