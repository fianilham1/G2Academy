import React, { Component } from 'react';
import {connect} from "react-redux";
import {signOut} from '../../actions/auth';
import {
    Text,
    View,
    TouchableHighlight} from 'react-native';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    authHandler = () => {
        this.props.doLogout()
    }

    render() { 
        return (  
            <TouchableHighlight
             onPress={this.authHandler}
             underlayColor="#0EA5A2"
             style={{
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:40,
                backgroundColor:"#00716F",
                paddingVertical:10,
                borderRadius:23,
                height:45
            }}>
            <View >
            <Text 
                style={{
                    color:"white",
                    fontFamily:"SemiBold"
                }}>Sign out</Text>       
            </View>
            </TouchableHighlight>

        );
    }
}
 
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(Account);