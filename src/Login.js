import React, { Component } from 'react'
import './Todo.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userConfig:{
                username:"fianilham1@gmail.com",
                password:"fian123@"
            }
         }
    }
    onChangeHandler = e => {
        let userConfigCopy = JSON.parse(JSON.stringify(this.state.pageConfig))
        userConfigCopy.username = e.target.name;

    //    if(e.target.name === this.state.[db]){
    //         console.log("success")
    //    }
        // this.setState({
        //   [el.target.name]: el.target.value,
        // })
    }
    onSubmitHandler =  e => {
        e.preventDefault();
        const keyUsername = e.target[0].name;
        const keyPassword = e.target[1].name
        let userInput = {
            [keyUsername]:e.target[0].value,
            [keyPassword]:e.target[1].value
        }
        console.log(this.state.userConfig[keyUsername])

        if(userInput[keyUsername] === this.state.userConfig[keyUsername] && userInput[keyPassword] === this.state.userConfig[keyPassword]){
            alert("Login Success");
        }else{
            alert("Username/Password is Wrong!!");
        }
      }
    render() { 
        return (  
            <React.Fragment>
                <div className="login-wrapper">
                    <h1>Please Log In</h1>
                    <form onSubmit={this.onSubmitHandler}>
                        <label>
                        <p>Username</p>
                        <input type="text" name="username"/>
                        </label>
                        <label>
                        <p>Password</p>
                        <input type="password" name="password"/>
                        </label>
                        <div>
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Login;