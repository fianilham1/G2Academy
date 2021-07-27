import React, { Component } from 'react'
import '../inputType.css';
import { Input } from '../../component';
import profileImg from './profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

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

        const {dataUser} = this.props
       
        console.log("CEK LOGIN USER",userInput[keyUsername])
        for(let i=0;i<dataUser.length;i++){
            console.log("call user in login",dataUser[i][keyUsername])
            if(userInput[keyUsername] === dataUser[i][keyUsername] && userInput[keyPassword] === dataUser[i][keyPassword]){
                // console.log("ceklogged",userInput)
                userInput['name']=dataUser[i]['name']
                this.props.onLogin(userInput);
                return Swal.fire({
                  icon: 'success',
                  title: 'Login is Success',
                  showConfirmButton: false,
                  timer: 1500
                })
                  
            }
        }
        return Swal.fire({
            icon: 'error',
            title: 'Username/Password is Wrong',
            text: 'Please try again!',
            showConfirmButton: false,
            timer: 1500
          })
       
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
                <h2>Sign In</h2>
                
                    <Input focusState={this.state} name="Username" focus={this.focusHandler} blur={this.blurHandler} icon={envelope} typeTx="text"/>
                
                    <Input focusState={this.state} name="Password" focus={this.focusHandler} blur={this.blurHandler} icon={unlock} typeTx="password"/>
                
                <button className="button" type="submit">Sign In</button>
            </form>
            </React.Fragment>
        );
    }
}
 
export default Login;