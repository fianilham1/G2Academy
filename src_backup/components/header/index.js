import React, { Component } from 'react';
import {connect} from "react-redux";
import {signOut} from '../../actions/auth';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isClicked:false
         }
    }

    clicked = () => {
        this.setState({
            isClicked:!this.state.isClicked
        })
    }

    renderLogout = () => {
        if (this.state.isClicked) return <TouchableOpacity
        onPress={() => this.props.doLogout()}
        style={{
            height:120,
            backgroundColor:'white',
            position:'absolute',
            top:30,
            right:5,
            paddingHorizontal:15
        }}
        >
            <Text>Log out</Text>
        </TouchableOpacity>

        return null
    }

    render() { 
        return (
            <View style={styles.top}>
            <Text style={styles.logo}>WhatsApp</Text>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Icon
                  name="search"
                  color="#fff"
                  size={23}
                  style={{ padding: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="chat"
                  color="#fff"
                  size={23}
                  style={{ padding: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={this.clicked}
              >
                <Icon
                  name="more-vert"
                  color="#fff"
                  size={23}
                  style={{ padding: 5 }}
                />
              </TouchableOpacity>
              {this.renderLogout()}
            </View>
          </View>
          );
    }
}
 
const mapDispatchToProps = dispatch => ({
    doLogout: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(Header);


const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    backgroundColor: '#075e54',
    borderColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 23,
    color: '#fff',
    margin: 10,
    fontWeight: '500',
  },
  icons: {
    flexDirection: 'row',
  },
});