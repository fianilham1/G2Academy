import React, { Component } from 'react';
import {
    Text,
    View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const MAIN_COLOR = '#00716F'
const GRAY_COLOR = '#CBCBCB'

class InputApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {state, label, setFocus, setValue, icon, secureTextEntry} = this.props
        return (
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                borderColor:state[`isFocus${label}`] ? MAIN_COLOR : GRAY_COLOR,
                borderRadius:23,
                paddingVertical:1
            }}>
            
              <Input
                    placeholder={label}
                    label={label}
                    secureTextEntry={secureTextEntry ? secureTextEntry : false}
                    onChangeText={text => setValue(label.toLowerCase(),text)}
                    onFocus={() => setFocus(label)}
                    onBlur={() => setFocus(label)}
                    labelStyle={{
                        position:"absolute",
                        bottom:53,
                        fontSize:18,
                        color:"#00716F"
                    }}
                    leftIcon={
                        <Icon
                        // name='mail'
                        name={icon}
                        size={20}
                        color="#00716F"
                        />
                    }
                   containerStyle={{
                       height:45,
                       paddingHorizontal:10,
                       borderColor:"#CBCBCB"
                    }}
                    inputContainerStyle={{
                        borderBottomWidth:0,
                        height:45
                    }} 
                    style={{
                        paddingHorizontal:10
                    }}
                />
        
            </View>
         );
    }
}
 
export default InputApp;