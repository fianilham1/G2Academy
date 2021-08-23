import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {
    Text,
    View,
    ScrollView, 
    Alert,
    StyleSheet,
    TouchableOpacity,
    ImageBackground} from 'react-native';
import {connect} from "react-redux";
import {signIn} from '../../actions/auth';
import {InputApp, ButtonApp, AuthHeader} from '../../components';
import { COLOR} from '../../constant/color';
import { SocialIcon } from 'react-native-elements'


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
        }
        } 
        return (false)
    }   

    ValidateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username))
    {
        return (true)
    }
    return (false)
    }

    getUserApi = () => {
        const userList = this.props.userList
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
                id:userList[i].id,
                name:userList[i].name,
                username:this.state.username,
                password:this.state.password,
                role:userList[i].role,
                image:userList[i].image,
                phone:userList[i].phone,
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

       if(!this.state.foundUsername) {
          
        this.setState({
            validUsername:false
        })
       }

       this.setState({
           validPassword:false
       })
    }

    render(){
        const {navigation} = this.props
        return(
            <ScrollView style={{backgroundColor:"#FFF",height:"100%"}}>
                <AuthHeader title='WELCOME!' subtitle='Stay Healthy' />
          
                <Animatable.View
                animation="fadeInDown"
                duration={1300}>
              
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
                
                <TouchableOpacity style={styles.forgetPass}>
                    <Text style={styles.forgetPassText}>Forget Password ?</Text>
                </TouchableOpacity>

                <View style={styles.connect}>
                    <Text style={styles.connectText}>or connect with</Text>
                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity>
                        <SocialIcon
                        title='Facebook'
                        button
                        type='facebook'
                        style={{width:120,height:50}}
                        />
                    </TouchableOpacity>
                  
                    <TouchableOpacity>
                        <SocialIcon
                        title='Google'
                        button
                        type='google'
                        style={{width:120,height:50}}
                        />
                    </TouchableOpacity>
                </View>
               
                <Text
                 style={{
                    alignSelf:"center",
                    fontFamily:"SemiBold",
                    paddingVertical:17
                }}>Not a Member?  
                <Text>  </Text>
                <TouchableOpacity
                onPress={()=>navigation.replace('Register')}>
                    <Text 
                    style={{
                        color:COLOR.main,
                        fontSize:18,
                        fontWeight:'bold',
                        marginBottom:-5
                    }}
                   >Sign Up</Text>
                </TouchableOpacity>
                    <Text> </Text>
                    Now
                </Text>
               

                </Animatable.View>               
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    userList: state.auth.userList,
})

const mapDispatchToProps = dispatch => ({
    doLogin: data => dispatch(signIn(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    connect:{
        marginTop:15,
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center',
    },
    connectText:{
        fontSize:17, 
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        opacity:0.4
        // color:COLOR.gray
    },
    socialContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    forgetPass:{
        marginLeft:50,
        marginTop:5
    },
    forgetPassText:{
        color:COLOR.main,
        fontWeight:'bold',
        fontSize:16
    }
})