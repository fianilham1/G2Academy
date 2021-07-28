import React, { Component } from 'react';
import '../inputType.css';
import { Input } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlockAlt, faClipboardCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

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
                confirmpassword:""
            }
        }
    }

    componentDidMount() {
        const { editStatus } = this.props;
        if (editStatus){
            this.setState({
                isFocusName:true,
                isFocusUsername:true,
                isFocusPassword:true
            })
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
        const {editStatus} = this.props; 

        if(userInputNew[keyPassword] === userInputNew[keyConfirmPassword]){
            if(!editStatus){
                this.setState({ userNew: userInputNew});
                this.props.onAddNewUser(userInputNew);
                Swal.fire({
                    icon: 'success',
                    title: 'Register is Success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }else{
                this.props.onEditUser(userInputNew);
                Swal.fire({
                    icon: 'success',
                    title: 'Edit is Success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
           
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Password is Not Match',
                text: 'Please try again!',
                showConfirmButton: false,
                timer: 1500
              })
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
        const {editStatus, loggedUser} = this.props; 
        console.log("EDIT??",editStatus)
        return (
            <React.Fragment>
                {/* focusState={this.state} */}
            <form onSubmit={this.onSubmitHandler} className="bgform">
                <h2>{editStatus ? `Edit Account` : `Create Account`}</h2>

                <Input focusState={this.state} name="Name" focus={this.focusHandler} blur={this.blurHandler} icon={person} typeTx="text" defaultValue={editStatus ? loggedUser.name : ''}/>

                <Input focusState={this.state} name="Username" focus={this.focusHandler} blur={this.blurHandler} icon={envelope} typeTx="text" defaultValue={editStatus ? loggedUser.username : ''}/>

                <Input focusState={this.state} name="Password" focus={this.focusHandler} blur={this.blurHandler} icon={unlock} typeTx="password" defaultValue={editStatus ? loggedUser.password : ''}/>

                <Input focusState={this.state} name="ConfirmPassword" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="password"/>
                
                <button className="button" type="submit">{editStatus ? `Save` : `Register`}</button>
            </form>
            
        </React.Fragment>
        );
    }
}

export default Home;