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

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusName:false,
            isFocusUsername:false,
            isFocusPassword:false,
            isFocusConfirmPassword:false,
            isFocusMainSalary:false,
            isFocusFood:false,
            isFocusTransport:false,
            isFocusEntertaint:false,
            userNew:{
                name:"",
                username:"",
                password:"",
                confirmpassword:"",
                role:"",
                mainsalary:0,
                allowance:{
                  food:0,
                  transport:0,
                  entertaint:0
                }

            }
        }
    }

    componentDidMount() {
        const { editStatus } = this.props;
        if (editStatus){
            this.setState({
                isFocusMainSalary:true,
                isFocusFood:true,
                isFocusTransport:true,
                isFocusEntertaint:true
            })
        }
      }

    onSubmitHandler =  e => {
        e.preventDefault();
        const {editStatus, edittedUser} = this.props; 

        if(!editStatus){ //for Register NEW USER
            
            let userInputNew = {
                [e.target[0].name]:e.target[0].value,
                [e.target[1].name]:e.target[1].value,
                [e.target[2].name]:e.target[2].value,
                [e.target[3].name]:e.target[3].value,
                [e.target[4].name]:e.target[4].value,
                [e.target[5].name]:e.target[5].value
            }
            // console.log(this.state.userNew[keyUsername])
            
            if(userInputNew[e.target[2].name] === userInputNew[e.target[3].name]){
                this.setState({ userNew: userInputNew});
                this.props.onAddNewUser(userInputNew);
                return Swal.fire({
                        icon: 'success',
                        title: 'Register is Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
            }else{
               return Swal.fire({
                        icon: 'error',
                        title: 'Password is Not Match',
                        text: 'Please try again!',
                        showConfirmButton: false,
                        timer: 1500
                    })
            }

        } //for EDIT SALARY

            let salaryInputNew = {
                id:edittedUser.id,
                [e.target[0].name]:parseInt(e.target[0].value),
                allowance:{
                    [e.target[1].name]:parseInt(e.target[1].value),
                    [e.target[2].name]:parseInt(e.target[2].value),
                    [e.target[3].name]:parseInt(e.target[3].value)
                }
            }
           
            this.props.onEditUser(salaryInputNew);
            return Swal.fire({
                    icon: 'success',
                    title: 'Edit Salary is Success',
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


    renderPage = () => {
        const {editStatus, edittedUser} = this.props; 
        console.log("EDITSTATUS in FORM??",editStatus)

        if(editStatus) return (
            <>
            <h2>Edit Salary For {edittedUser.name}</h2>

                <Input focusState={this.state} name="MainSalary" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="text" defaultValue={edittedUser.mainSalary}/>

                <Input focusState={this.state} name="Food" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="text" defaultValue={edittedUser.allowance.food}/>

                <Input focusState={this.state} name="Transport" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="text" defaultValue={edittedUser.allowance.transport}/>

                <Input focusState={this.state} name="Entertaint" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="text" defaultValue={edittedUser.allowance.entertaint}/>
                
                <button className="button" type="submit">Save</button>
            </>
        )

        return (
            <>
            <h2>Create Account</h2>

                <Input focusState={this.state} name="Name" focus={this.focusHandler} blur={this.blurHandler} icon={person} typeTx="text" />

                <Input focusState={this.state} name="Username" focus={this.focusHandler} blur={this.blurHandler} icon={envelope} typeTx="text" />

                <Input focusState={this.state} name="Password" focus={this.focusHandler} blur={this.blurHandler} icon={unlock} typeTx="password" />

                <Input focusState={this.state} name="ConfirmPassword" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="password"/>

                <Input focusState={this.state} name="role" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="text"/>

                <Input focusState={this.state} name="mainSalary" focus={this.focusHandler} blur={this.blurHandler} icon={check} typeTx="text"/>
                
                <button className="button" type="submit">Register</button>
            </>
        )

    }

    render() {
      
        return (
            <React.Fragment>
            <form onSubmit={this.onSubmitHandler} className="bgform">
                {this.renderPage()}
                
            </form>
            
        </React.Fragment>
        );
    }
}

export default Form;