import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    StatusBar,
    ImageBackground
  } from 'react-native';
import {connect} from "react-redux";
import {Logo} from '../../components';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../constant/color';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           isPress:false
         }
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //     this.props.navigation.replace('Auth')
    //     },1000)
    // }

    handler = () => {
        this.setState({
            isPress:!this.state.isPress
        })
    }

    render() { 
        return ( 
            <ImageBackground 
            source ={require('../../images/landscape3.jpg')}
            style={styles.container}>
                 <StatusBar translucent backgroundColor="#fff" /> 
                 <View style={styles.dark}></View>
    
                <Animatable.View
                animation="bounceIn"
                duration={1500}
                style={styles.header}>
                <Logo />
                </Animatable.View>

                 <Animatable.View 
                  animation="fadeInUpBig"
                  duration={1000}
                  style={styles.footer}
                 >
                    <Text style={styles.title}>Stay Connect With Everyone!</Text>
                    <Text style={styles.text}>Please Sign In to Continue</Text>
                    <View  style={styles.button}>
                        <TouchableHighlight
                        underlayColor="#1A6396" 
                        onPress={() => this.props.navigation.replace('Auth')}
                        style={{...styles.signInBox, ...styles.shadow}}>
                            <View style={styles.signIn}>
                            <Text style={styles.signInText}>
                               Getting Start
                            </Text>
                            <Icon
                            style={{marginLeft:10}}
                            name='chevron-right'
                            size={20}
                            color='white'
                            />
                            </View>
                        </TouchableHighlight>
                    </View>

                 </Animatable.View>
               
            </ImageBackground>
         );
    }
}
 
const mapStateToProps = state => ({
    loginStatus: state.auth.loginStatus,
  })
  
  export default connect(mapStateToProps)(Splash);

const styles = StyleSheet.create({
    container : {
        // backgroundColor:'#05375a',
        flex:1,
    },
    header:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        position:'absolute',
        top:'25%',
        left:'25%'
    },
    footer:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    title:{
        color:COLOR.main,
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        opacity:0.4,
        marginTop:10,
        fontSize:17,
    },
    button:{
        alignItems:'flex-end',
        marginTop:70
    },
    signInBox:{
        width:150,
        height:45,
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:'#05375a'
    },
    signIn:{
        flexDirection:'row',
    },
    shadow:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.85,
        shadowRadius: 3,  
        elevation: 5,
    },
    signInText:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
    },
    dark: {
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
      },
})