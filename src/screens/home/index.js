import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    Text,
    View,
    StyleSheet} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
          <View><Text>ggg</Text></View>
        );
    }
}
 
export default Home;

const styles = StyleSheet.create({
    headerIcon:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30,
        marginTop:6
    },
})