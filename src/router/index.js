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
  Contact,
  ContactDetail,
  AddContact,
  EditContact, 
  Account,
  OnBoard,
  Detail} from '../screens';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome5';
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
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          bottom:-20,
          backgroundColor:'#ffffff',
          borderRadius:25,
          height:90,
          ...styles.shadow
        }
      }}>

        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({focused}) => {
              return <View
              style={styles.buttonBar}>
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
              style={styles.buttonBar}>
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
              <Icon
                name='list'
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
          name="Contact" 
          component={Contact} 
          options={{
            tabBarIcon: ({focused}) => {
              return <View
              style={styles.buttonBar}>
              <Icon
                name='address-book'
                size={24}
                color={focused ? '#e32f45' : '#748c94'}
              />
                <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12
                }}
                >Contact</Text>
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
              style={styles.buttonBar}>
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
              name="Tab" 
              component={TabScreen} />
            <RootStack.Screen 
              name="Detail" 
              component={Detail} />
            <RootStack.Screen 
              name="ContactDetail" 
              component={ContactDetail} />
            <RootStack.Screen 
              name="AddContact" 
              component={AddContact} />
            <RootStack.Screen 
              name="EditContact" 
              component={EditContact} />
            
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
