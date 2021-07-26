import React, { Component } from 'react'
import '../inputType.css';
import profileImg from './profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const envelope = <FontAwesomeIcon icon={faEnvelope} />
const unlock = <FontAwesomeIcon icon={faUnlockAlt} />

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFocusUsername:false,
            isFocusPassword:false,
            userConfig:{
                username:"",
                password:""
            }
         }
    }
    
    onSubmitHandler =  e => {
        e.preventDefault();
        const keyUsername = e.target[0].name;
        const keyPassword = e.target[1].name
        let userInput = {
            name:'',
            [keyUsername]:e.target[0].value,
            [keyPassword]:e.target[1].value
        }
        console.log(this.state.userConfig[keyUsername])
        this.props.onLogin();

        const {dataUser} = this.props
        console.log("call user in login",dataUser)
        for(let i=0;i<dataUser.length;i++){
            if(userInput[keyUsername] === dataUser[i][keyUsername] && userInput[keyPassword] === dataUser[i][keyPassword]){
                // console.log("ceklogged",userInput)
                userInput['name']=dataUser[i]['name']
                this.props.onLogin(userInput);
                return alert("Login Success")
            }
        }
        return  alert("Username/Password is Wrong!!")
       
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
        const input = ['Username','Password']; 
        
        console.log("focus",this.state.isFocusUsername)
        return ( 
           
            <React.Fragment>
            <form onSubmit={this.onSubmitHandler} className="bgform">
                <img className="avatar" src={profileImg}/>
                <h2>Welcome</h2>
                <div className={`input-div${ this.state[`isFocus${input[0]}`] ? ' focus' : ''}`}>
                    <div className="i">
                        {envelope}
                        {/* <i className="fas fa-user"></i> */}
                    </div>
                    <div>
                        <h5>{input[0]}</h5>
                        <input id={`isFocus${input[0]}`} className="input" type="text" onFocus={this.focusHandler} onBlur={this.blurHandler} name="username"/>
                    </div>
                </div>
                <div className={`input-div${ this.state[`isFocus${input[1]}`] ? ' focus' : ''}`}>
                    <div className="i">
                        {unlock}
                        {/* <i className="fas fa-calendar-check"></i> */}
                    </div>
                    <div>
                        <h5>{input[1]}</h5>
                        <input id={`isFocus${input[1]}`} className="input"  type="password" onFocus={this.focusHandler} onBlur={this.blurHandler} name="password"/>
                    </div>
                </div>
                
                <button className="button" type="submit">Sign In</button>
            </form>
            </React.Fragment>
        );
    }
}
 
export default Login;