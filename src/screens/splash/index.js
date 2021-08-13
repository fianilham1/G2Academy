import React, { Component } from 'react';
import {
    View,
    StyleSheet 
  } from 'react-native';
import {connect} from "react-redux";
import {Logo} from '../../components'

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }

    componentDidMount(){
     
        const directNav = this.props.loginStatus ? 'Tab' : 'Auth'
        setTimeout(() => {
        this.props.navigation.replace(directNav)
        },1000)
    }

    render() { 
        return ( 
            <View style={styles.container}>
                <Logo />
            </View>
         );
    }
}
 
const mapStateToProps = state => ({
    loginStatus: state.auth.loginStatus,
  })
  
  export default connect(mapStateToProps)(Splash);

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})