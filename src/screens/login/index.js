import React, { Component } from 'react';
import {
    Text,
    View,
    Image, 
    Alert,
    TouchableHighlight} from 'react-native';
import {connect} from "react-redux";
import {signIn} from '../../actions/auth';
import {InputApp, ButtonApp} from '../../components';

// const alertSignIn = () =>
//     Alert.alert(
//       "Alert Title",
//       "My Alert Msg",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         { text: "OK", onPress: () => console.log("OK Pressed") }
//       ]
//     );

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            userList:[],
            username:'',
            password:'',
            statusLogin:false,
            isFocusUsername:false,
            isFocusPassword:false
         }
    }

    setFocus = name => {
        const nameFocus = `isFocus${name}`
        this.setState({
            [nameFocus]:!this.state[nameFocus]
        })
    }

    setValue = (inputName, value) => {
       this.setState({
        [inputName]:value
       })
    //    console.log("value change",value)
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
        if(userList[i].username===this.state.username && userList[i].password===this.state.password) {
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

       //invalid username/password
        return Alert.alert(
            "Alert Sign In",
            "Username/Password is Wrong")
    }

    render(){
        const {navigation} = this.props
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../../images/image.jpg')}
                    style={{
                        width:"100%",
                        height:"40%",
                        marginTop:-20
                    }}
                />
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
                    setFocus={this.setFocus}
                    setValue={this.setValue}
                    icon="envelope"/>

                <InputApp 
                    state={this.state}
                    label="Password"
                    setFocus={this.setFocus}
                    setValue={this.setValue}
                    secureTextEntry={true}
                    icon="lock"/>

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
                        color:"#00716F",
                        fontSize:18,
                        fontWeight:'bold'
                    }}
                   >Sign Up</Text>
                    <Text> </Text>
                    Now
                </Text>
               
            </View>
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