import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    ImageBackground,
    TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Logo} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

class OnBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
            style={{flex: 1}}
            source={require('../../images/location5.jpg')}>
            <View style={styles.dark}></View>
            <Animatable.View
            animation="fadeInDown"
            duration={1500} 
            style={styles.details}>
               
            <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
                Discover
            </Text>
            <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
                world with us
            </Text>
            <Text style={{color: 'white', lineHeight: 25, marginTop: 15,marginBottom:25}}>
               Take Time To Do What Makes Your Soul Happy..
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('Auth')}>
                <View style={styles.btn}>
                <Text style={{fontWeight: 'bold'}}>Get Started</Text>
                <Icon
                    style={{marginLeft:10}}
                    name='chevron-right'
                    size={20}
                />
                </View>
            </TouchableOpacity>
            </Animatable.View>
        </ImageBackground>
        </View>
         );
    }
}
 
export default OnBoard;

const styles = StyleSheet.create({
    details: {
      height: '50%',
      bottom: 0,
      position: 'absolute',
      paddingHorizontal: 40,
    },
    btn: {
      height: 50,
      width: 120,
      backgroundColor: 'white',
      marginTop: 20,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row'
    },
    dark: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
  });