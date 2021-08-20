import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Splash, 
  Login,
  Register, 
  OnBoard,
  CallsTab,
  ChatsTab,
  StatusTab,
  ChatView} from '../screens';
import {
  View,
  Text,
  StyleSheet,
  Dimensions} from 'react-native';
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { Component } from 'react';

import {Header} from '../components';
import { CHATSDATA } from '../constant/chatsData';
import { CALLSDATA } from '../constant/callsData';
import { STATUSDATA } from '../constant/statusData';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

class AuthStackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  render() { 
    return ( 
      <AuthStack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}>

        <AuthStack.Screen 
          name="Login" 
          component={Login} />
        <AuthStack.Screen 
          name="Register" 
          component={Register} />

      </AuthStack.Navigator>
     );
  }
}

// Main Component WHATSAPP.......................................................
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contacts: [],
      Chats: CHATSDATA,
      Calls: CALLSDATA,
      Status: STATUSDATA,
      ProfileStatus: {
        name:'My Status',
        image:'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216671.5403_tunyra_n.jpg'
      }
    };
    // fetch('/Users/chauhan/Desktop/Whatsapp/App/data/data.json')
    //  .then(response => response.json())
    //  .then(data => this.setState({
    //    Contacts: data.Contacts,
    //    Chats: data.Chats,
    //    Calls: data.Calls,
    //  }));
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header />
      <Tab.Navigator
       screenOptions={{
        tabBarLabelStyle: { 
          fontSize: 16,
           color:'white',
          },
        tabBarStyle: { 
          backgroundColor: '#075e54',
        },
        tabBarIndicatorStyle:{
          borderBottomColor:'white',
          borderBottomWidth: 2.5,
        },
        tabBarPressColor:'#83B0AA',
      }}
      style={{backgroundColor:'red'}}
      timingConfig={{duration:200}}
      initialLayout={{width: Dimensions.get('window').width}}
      >
        <Tab.Screen tim name="Chats" children={(props) => <ChatsTab {...props} 
        ChatsData={this.state.Chats}/>}/>
        <Tab.Screen name="Status" children={(props) => <StatusTab {...props} 
        StatusData={this.state.Status} 
        ProfileData={this.state.ProfileStatus}
        />}/>
        <Tab.Screen name="Calls" children={(props) => <CallsTab {...props}  
        CallsData={this.state.Calls}/>}/>
      </Tab.Navigator>
      </View>
    );
  }
}

class RootStackScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         
         }
    }

    render() { 
        return ( 
        <NavigationContainer>
          <RootStack.Navigator 
          initialRouteName="OnBoard"
          screenOptions={{
            headerShown: false
          }}>
         
          { !this.props.loginStatus ? 
            <>
            <RootStack.Screen 
              name="OnBoard" 
              component={OnBoard}/>
            <RootStack.Screen 
              name="Auth" 
              component={AuthStackScreen} />
            </>
          :
            <>
            <RootStack.Screen 
              name="Home" 
              component={Home} />
            <RootStack.Screen 
              name="ChatView" 
              component={ChatView} />
            </>
          }
        
          </RootStack.Navigator>
        </NavigationContainer>
         );
    }
}
 
const mapStateToProps = state => ({
  loginStatus: state.auth.loginStatus,
  userLogin: state.auth.userLogin
})

export default connect(mapStateToProps)(RootStackScreen);

const styles = StyleSheet.create({
  buttonBar:{
    alignItems:'center',
    justifyContent:'center',
    top:-5,
    height:30,
    width:50
  },
  shadow:{
    shadowColor: '#000000',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    top:-30,
    height:60,
    width:60,
    borderRadius:40,
    backgroundColor:'#F02A48'
  },
  menu:{
    backgroundColor:'#F02A48'
  }
})