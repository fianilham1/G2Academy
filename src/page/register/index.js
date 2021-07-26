import React, { Component } from 'react';
import '../inputType.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlockAlt, faClipboardCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const envelope = <FontAwesomeIcon icon={faEnvelope} />
const unlock = <FontAwesomeIcon icon={faUnlockAlt} />
const person = <FontAwesomeIcon icon={faUser} />
const check = <FontAwesomeIcon icon={faClipboardCheck} />

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusName:false,
            isFocusUsername:false,
            isFocusPassword:false,
            isFocusConfirmPassword:false,
            userNew:{
                name:"",
                username:"",
                password:"",
                confirmPassword:""
            }
        }
    }
    onSubmitHandler =  e => {
        e.preventDefault();
      
        const keyName = e.target[0].name;
        const keyUsername = e.target[1].name;
        const keyPassword = e.target[2].name;
        const keyConfirmPassword = e.target[3].name;
        console.log(e)
        
        let userInputNew = {
            [keyName]:e.target[0].value,
            [keyUsername]:e.target[1].value,
            [keyPassword]:e.target[2].value,
            [keyConfirmPassword]:e.target[3].value
        }
        console.log(this.state.userNew[keyUsername])

        if(userInputNew[keyPassword] === userInputNew[keyConfirmPassword]){
            alert("Register Success");
            this.setState({ userNew: userInputNew});
            this.props.onAddNewUser(userInputNew);
        }else{
            alert("Password is not match");
        }
      }

    focusHandler = e => {
        this.setState({[e.target.id]:true})
    }  
    blurHandler = e => {
        const value = e.target.value;
        if(value===''){
            this.setState({[e.target.id]:false})
        }
       
    }
    render() {
        const input = ['Name','Username','Password','ConfirmPassword']; 
        return (
            <React.Fragment>
            {/* <div className="register-wrapper">
                <h1>Please Register</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <label>
                        <p>Name</p>
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        <p>Username</p>
                        <input type="text" name="username"/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name="password"/>
                    </label>
                    <label>
                        <p>Confirm Password</p>
                        <input type="password" name="confirmPassword"/>
                    </label>
                    <div>
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div> */}
            <form onSubmit={this.onSubmitHandler} className="bgform">
                <h2>Create Account</h2>
                <div className={`input-div${ this.state[`isFocus${input[0]}`] ? ' focus' : ''}`}>
                    <div className="i">
                        {person}
                    </div>
                    <div>
                        <h5>{input[0]}</h5>
                        <input id={`isFocus${input[0]}`} className="input" type="text" onFocus={this.focusHandler} onBlur={this.blurHandler} name="name"/>
                    </div>
                </div>
                <div className={`input-div${ this.state[`isFocus${input[1]}`] ? ' focus' : ''}`}>
                    <div className="i">
                        {envelope}
                    </div>
                    <div>
                        <h5>{input[1]}</h5>
                        <input id={`isFocus${input[1]}`} className="input" type="text" onFocus={this.focusHandler} onBlur={this.blurHandler} name="username"/>
                    </div>
                </div>
                <div className={`input-div${ this.state[`isFocus${input[2]}`] ? ' focus' : ''}`}>
                    <div className="i">
                        {unlock}
                    </div>
                    <div>
                        <h5>{input[2]}</h5>
                        <input id={`isFocus${input[2]}`} className="input"  type="password" onFocus={this.focusHandler} onBlur={this.blurHandler} name="password"/>
                    </div>
                </div>
                <div className={`input-div${ this.state[`isFocus${input[3]}`] ? ' focus' : ''}`}>
                    <div className="i">
                        {check}
                    </div>
                    <div>
                        <h5>Confirm Password</h5>
                        <input id={`isFocus${input[3]}`} className="input"  type="password" onFocus={this.focusHandler} onBlur={this.blurHandler} name="confirmPassword"/>
                    </div>
                </div>
                
                <button className="button" type="submit">Register</button>
            </form>
            
        </React.Fragment>
        );
    }
}

export default Home;