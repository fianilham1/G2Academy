import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { MAIN_COLOR } from '../../constant/main-color';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ImageBackground
    } from 'react-native';

const WIDTH= Dimensions.get('window').width;

class AuthHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container} >
             <StatusBar translucent backgroundColor="transparent" /> 
                <ImageBackground
                    style={styles.box}
                    imageStyle={styles.image}
                    source ={require('../../images/landscape2.jpg')}>
                    <View style={styles.dark}></View>
                </ImageBackground>
                <Animatable.View
                animation="bounceIn"
                duration={1500}
                style={styles.textContainer}
                >
                    <Text style={styles.text}>WELCOME!</Text>
                    <Text style={styles.text2}>Stay Healthy</Text>
                </Animatable.View>
                <View style={styles.textContainer}>
                   
                </View>
            </View>
         );
    }
}
 
export default AuthHeader;


const styles = StyleSheet.create({
    container:{
        height:270,
        marginBottom:20,

    },
    textContainer:{
        flex:1,
        // justifyContent: 'flex-end', 
        // alignItems: 'flex-start',
        marginLeft:70,
        marginTop:70
    },
    text:{
      color:"#ffffff",
      fontSize:40,
      fontWeight:'bold'  
    },
    text2:{
        color:"#ffffff",
        fontSize:25,
      },
    box:{
        width:WIDTH*1.6,
        height:550,
        position:'absolute',
        top: -290,
        left: -70,
     
        // borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    },
    dark: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius:WIDTH*1.6,
      },
    image:{
        resizeMode: 'cover',
        borderRadius:WIDTH*1.6,
    },
    boxContainer:{
       flex:1,
        minHeight:200,
        flexDirection:'column',
        borderRadius:19,
        backgroundColor:'#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 2,  
        elevation: 5,
        position:'relative'
    },
    backDrop:{
        flex:1,
        height:100,
        position:'absolute',
        flexDirection:'column',
        borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        backgroundColor:MAIN_COLOR
    },
    topContainer:{
        flex:1.6,
        height:250,
        flexDirection:'column',
        // alignItems:'center',
        justifyContent:'flex-end',
        paddingHorizontal:28.8,
        paddingBottom:80
    }
})