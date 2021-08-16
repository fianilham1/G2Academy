import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {
    Text,
    View,
    ScrollView, 
    Alert} from 'react-native';
import {connect} from "react-redux";
import {signIn} from '../../actions/auth';
import {InputApp, ButtonApp, AuthHeader} from '../../components';
import { MAIN_COLOR } from '../../constant/main-color';


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            userList:[],
            username:'',
            password:'',
            statusLogin:false,
            isFocusUsername:false,
            isFocusPassword:false,
            validUsername:true,
            validPassword:true,
            visible:false,
            foundUsername:false,
         }
    }

    setVisibleToggle = () => {
        this.setState({
            visible:!this.state.visible
        })
    }

    setFocus = name => {
        const nameFocus = `isFocus${name}`
        this.setState({
            [nameFocus]:!this.state[nameFocus]
        })
    }

    setValue = (inputName, value) => {
       this.setState({
        [inputName]:value,
        validUsername:true,
        validPassword:true
       })

       setTimeout(() => {
        if(this.ValidateEmail()) {       
            if(this.authUsername()) {
                 this.setState({
                     foundUsername:true
                 })
            }else{
                 this.setState({
                     foundUsername:false
                 })
            }  
        }else{
            if(this.state.foundUsername) {
                 this.setState({
                     foundUsername:false
                 })
            }
        }
       },200)
    }

    authUsername = () => {
        const {userList} = this.state
        for(let i=0;i<userList.length;i++){
         if(userList[i].username===this.state.username) {
             return (true)
         }else{
            return (false)
         } 
        } 
    }   

    ValidateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username))
    {
        return (true)
    }
    return (false)
    }

    getUserApi = () => {
        const userList = [
        {
            name:'Fian',
            username:"fian1@gmail.com",
            password:"fian123@"
        },
        {
            name:'John',
            username:"john1@gmail.com",
            password:"john123@"
        }]
        this.setState({
            userList
        })
    }

    componentDidMount(){
        this.getUserApi()
    }

    authHandler = () => {
    const {userList} = this.state
       for(let i=0;i<userList.length;i++){
        if(this.state.foundUsername && userList[i].password===this.state.password) {
            this.props.doLogin(
                {
                username:this.state.username,
                password:this.state.password
                }
            )
            return (
                //correct username&password
                Alert.alert(
                "Alert Sign In",
                "Sign In Success")
                )
        } 

       }

       this.setState({
           validUsername:false,
           validPassword:false
       })
    }

    render(){
        // console.log('state found',this.state.foundUsername)
        const {navigation} = this.props
        return(
            <ScrollView style={{backgroundColor:"#FFF",height:"100%"}}>
                <AuthHeader />
          
                <Animatable.View
                animation="fadeInDown"
                duration={1200}>
                    <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Sign In</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Welcome. The Hero of Earth
                </Text>

                <InputApp 
                    state={this.state}
                    label="Username"
                    valid={this.state.validUsername}
                    setFocus={this.setFocus}
                    setValue={this.setValue}
                    icon="envelope"
                    found={this.state.foundUsername}/>

                <InputApp 
                    state={this.state}
                    label="Password"
                    valid={this.state.validPassword}
                    setFocus={this.setFocus}
                    setValue={this.setValue}
                    icon="lock"
                    visible={this.state.visible}
                    visibleToggle={this.setVisibleToggle}/>

                <ButtonApp 
                    label="Sign in"
                    handler={this.authHandler}/>

                <Text
                 style={{
                    alignSelf:"center",
                    fontFamily:"SemiBold",
                    paddingVertical:20
                }}>Not a Member?  
                <Text>  </Text>
                    <Text 
                    onPress={()=>navigation.replace('Register')}
                    style={{
                        color:MAIN_COLOR,
                        fontSize:18,
                        fontWeight:'bold'
                    }}
                   >Sign Up</Text>
                    <Text> </Text>
                    Now
                </Text>


                </Animatable.View>
                
               
            </ScrollView>
        )
    }
}

// const mapStateToProps = state => ({
//     isLogin: state.auth.statusLogin,
// })

const mapDispatchToProps = dispatch => ({
    doLogin: data => dispatch(signIn(data))
})

export default connect(null, mapDispatchToProps)(Login);