import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import {
  Splash, 
  Login,
  Register, 
  Home, 
  Find, 
  Post, 
  Chat, 
  Account} from '../screens';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight} from 'react-native';
// import Register from '../screens/Register'
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { Component } from 'react';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

class TabScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  render() { 
    return ( 
      <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          bottom:25,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'#ffffff',
          borderRadius:15,
          height:80,
          ...styles.shadow
        }
      }}>

        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused}) => {
              return <View
              style={{
                alignItems:'center',
                justifyContent:'center',
                top:2,
                height:30,
                width:40
              }}>
              <Icon
                name='home'
                size={24}
                color={focused ? '#e32f45' : '#748c94'}
              />
                <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12
                }}
                >Home</Text>
              </View>
            },
            tabBarButton: (props) => {
              return <TouchableOpacity 
              underlayColor="#0EA5A2"
              {...props} 
              />
            }
          }}/>
         <Tab.Screen 
          name="Find" 
          component={Find} 
          options={{
            tabBarIcon: ({focused}) => {
              return <View
              style={{
                alignItems:'center',
                justifyContent:'center',
                top:2
              }}>
              <Icon
                name='search'
                size={24}
                color={focused ? '#e32f45' : '#748c94'}
              />
                <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12
                }}
                >Find</Text>
              </View>
            },
            tabBarButton: (props) => {
              return <TouchableOpacity 
              underlayColor="#0EA5A2"
              {...props} 
              />
            }
          }}/>
         <Tab.Screen 
          name="Post" 
          component={Post} 
          options={{
            tabBarIcon: () => {
              return <View
              style={styles.button}>
              <AntDesign
                name='plus'
                size={24}
                color='#ffffff'
              />
              </View>
            },
            tabBarButton: (props) => {
              return <TouchableOpacity {...props} />
            }
          }}/>
         <Tab.Screen 
          name="Chat" 
          component={Chat} 
          options={{
            tabBarIcon: ({focused}) => {
              return <View
              style={{
                alignItems:'center',
                justifyContent:'center',
                top:2
              }}>
              <Icon
                name='comments'
                size={24}
                color={focused ? '#e32f45' : '#748c94'}
              />
                <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12
                }}
                >Chat</Text>
              </View>
            },
            tabBarButton: (props) => {
              return <TouchableOpacity 
              underlayColor="#0EA5A2"
              {...props} 
              />
            }
          }}/>
         <Tab.Screen 
          name="Account" 
          component={Account} 
          options={{
            tabBarIcon: ({focused}) => {
              return <View
              style={{
                alignItems:'center',
                justifyContent:'center',
                top:2
              }}>
              <Icon
                name='user'
                size={24}
                color={focused ? '#e32f45' : '#748c94'}
              />
                <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12
                }}
                >Me</Text>
              </View>
            },
            tabBarButton: (props) => {
              return <TouchableOpacity 
              underlayColor="#0EA5A2"
              {...props} 
              />
            }
          }}/>

      </Tab.Navigator>
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
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false
          }}>
         
          { !this.props.loginStatus ? 
            <>
            <RootStack.Screen 
              name="Splash" 
              component={Splash}/>
            <RootStack.Screen 
              name="Auth" 
              component={AuthStackScreen} />
            </>
          :
            <RootStack.Screen 
              name="Tab" 
              component={TabScreen} />
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
    height:70,
    width:70,
    borderRadius:40,
    backgroundColor:'#F02A48'
  },
  menu:{
    backgroundColor:'#F02A48'
  }
})
