import React, { Component } from 'react';
import { Login, Form, UserList, Detail } from '../../page';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editStatus: false,
            edittedUser:{},
            detailUser: {},
            userList: [
                {
                    id: 1,
                    name: 'Bobo',
                    username: 'bobo1@gmail.com',
                    password:'bobo123@',
                    role: 'HRD',
                    mainSalary:7000000,
                    allowance:{
                      food:1000000,
                      transport:1200000
                    }
                },
                {
                  id: 2,
                  name: 'Fian',
                  username: 'fian1@gmail.com',
                  password:'fian123@',
                  role: 'Manager',
                  mainSalary:10000000,
                  allowance:{
                    entertaint:2500000
                  }
                },
                {
                  id: 3,
                  name: 'Steve',
                  username: 'steve1@gmail.com',
                  password:'steve123@',
                  role: 'Employee',
                  mainSalary:5000000,
                  allowance:{
                    food:1500000,
                    transport:1500000
                  }
                },
                {
                  id: 4,
                  name: 'Hahi',
                  username: 'hahi1@gmail.com',
                  password:'hahi123@',
                  role: 'Employee',
                  mainSalary:5000000,
                  allowance:{
                    food:1500000,
                    transport:1500000
                  }
                },
                {
                  id: 5,
                  name: 'John',
                  username: 'john1@gmail.com',
                  password:'john123@',
                  role: 'Employee',
                  mainSalary:5000000,
                  allowance:{
                    food:1500000,
                    transport:1500000
                  }
                }
            ]
        }
    }

    // componentDidMount(){
    //     const urlFetch = fetch('https://jsonplaceholder.typicode.com/users')
    //     urlFetch.then( res => {
    //        if(res.status === 200)
    //           return res.json()   
    //     }).then( resJson => {
    //         const dataArr = resJson.map((data, index) => {
    //             return (
    //               {
    //                 name:data.name,
    //                 username:data.username,
    //                 password:'12345',
    //                 address:data.address.city
    //               }
    //             );
    //         }) 
    //         console.log("JSONDATA:",dataArr)
    //        this.setState({
    //         userList: dataArr
    //        })
    //     })
    //  }
    
      // addNewUserHandler = newUser => {
      //   let userCopy = this.state.userList;
      //   let userInputNew = {
      //       id: userCopy[userCopy.length-1].id+1,
      //       name: newUser.name,
      //       username: newUser.username,
      //       password: newUser.password
      //   }

      //   userCopy.push(userInputNew)
    
      //   this.setState({ userList: userCopy});
       
      //   console.log("call add new in MAIN LIST:",userInputNew)
      // }

      // editUserHandler = editedUser => {
      //   let userCopy = JSON.parse(JSON.stringify(this.state.userList))
      //   let row = this.state.editRow;
      //   userCopy[`${row-1}`].name = editedUser.name;
      //   userCopy[`${row-1}`].username = editedUser.username;
      //   userCopy[`${row-1}`].password = editedUser.password;
       
      //   this.setState({ userList: userCopy});
      //   this.props.updateLoggedUser(editedUser);
      //   this.props.onEditStatus();
      // }

      // deleteUserHandler = deletedRow => {
      //   let userCopy = JSON.parse(JSON.stringify(this.state.userList))
      //   userCopy.splice(deletedRow-1, 1)
       
      //   this.setState({ userList: userCopy});
      // }

      // GoToEditFormHandler = editedUserDefault => {
      //   this.props.onGoToEditForm()
      //   //get default edit
      //   this.setState({editRow:editedUserDefault.row})
      // }

      editUserHandler = edittedSalary => {
        const userCopy = this.state.userList;
        const indexForEdit = userCopy.map((user)=> {return user.id}).indexOf(edittedSalary.id);
        // let updatedUser = userCopy.find(user => user.id === edittedSalary.id);
        userCopy[indexForEdit].mainSalary = edittedSalary.mainSalary;
        userCopy[indexForEdit].allowance.food = edittedSalary.allowance.food;
        userCopy[indexForEdit].allowance.transport = edittedSalary.allowance.transport;
        userCopy[indexForEdit].allowance.entertaint = edittedSalary.allowance.entertaint;
       
        this.setState({ userList: userCopy});
        console.log("EDITT MASUK",indexForEdit)
        this.props.goToPage("userList")
      }

      editEventHandler = id => {
        const user = this.state.userList[id-1]
        this.setState({
          editStatus:true,
          edittedUser:user
        })
        this.props.goToPage("form")
      }

      detailEventHandler = id => {
        const user = this.state.userList[id-1]
        this.setState({
          detailUser:user
        })
        this.props.goToPage("detail")
      }


    renderPage = () => {
        const {loggedUser, page, onLogin} = this.props;
        console.log("CURRENT LIST MAIN:",this.state.userList)

        const filteredUserBasedRole = []; 
        if (loggedUser){
          this.state.userList.map((user,index) => {
            if(loggedUser.role==='HRD'){
              filteredUserBasedRole.push(user)
              return index
            }
      
            if(loggedUser.role==='Manager' && (user.username===loggedUser.username || user.role==='Employee')){
              filteredUserBasedRole.push(user)
              return index
            }
      
            return ''
          })
  
        }
        
        if (page === "form")
            return <Form onAddNewUser={this.addNewUserHandler} loggedUser={loggedUser} editStatus={this.state.editStatus} onEditUser={this.editUserHandler} edittedUser={this.state.edittedUser} />

        if (page === "userList")
            return <UserList dataUser={filteredUserBasedRole} loggedUser={loggedUser} onEditEvent={this.editEventHandler} onDetailEvent={this.detailEventHandler}/>

        if (page === "detail")
            return <Detail detailUser={this.state.detailUser}/>

        return <Login onLogin={onLogin} dataUser={this.state.userList}/>
    }

    render() {
        console.log("currentUSERLIST",this.state.userList)
        return (
            <div className="body">
                {this.renderPage()}
            </div>
        );
    }
}

export default Body;