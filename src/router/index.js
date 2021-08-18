import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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

import {Header, CallsTab, ChatsTab} from '../components';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

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

// Main Component WHATSAPP.......................................................
class HomeWA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contacts: [],
      Chats: [
        {
          name:'sheby',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'08:00',
          message:'Hello there?',
          icon:'person'
        },
        {
          name:'Violet',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'15:30',
          message:'Can I Ask?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          time:'12:11',
          message:'Can we Talk Now?',
          icon:'person'
        }
      ],
      Calls: [
        {
          name:'sheby',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-11',
          time:'09:50',
          icon:'call'
        },
        {
          name:'Violet',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-05-11',
          time:'09:30',
          icon:'video_call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        },
        {
          name:'Rose',
          image:'https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465',
          date:'2021-08-17',
          time:'11:50',
          icon:'call'
        }
      ],
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
      <TopTab.Navigator
       screenOptions={{
        tabBarLabelStyle: { 
          fontSize: 16,
           color:'white' 
          },
        tabBarStyle: { 
          backgroundColor: '#075e54',
        },
        tabBarIcon: ({focused}) => {
          return <View
          style={{
            borderBottomColor: focused ? 'white' : '#075e54',
            borderBottomWidth: 4,
            top:62,
            left:-37,
            width:100,
          }}
          >
          </View>
        },
      }}
      >
        <TopTab.Screen name="Chats" children={(props) => <ChatsTab {...props} ChatsData={this.state.Chats}/>}/>
        <TopTab.Screen name="Calls" children={(props) => <CallsTab {...props}  CallsData={this.state.Calls}/>}/>
      </TopTab.Navigator>
      </View>
      // <View style={{ flex: 1 }}>
      //   <Header />
      //   <ScrollableTabView
      //     style={{ borderColor: '#fff' }}
      //     tabBarUnderlineStyle={style = { backgroundColor: '#fff' }}
      //     tabBarBackgroundColor="#075e54"
      //     tabBarActiveTextColor="#fff"
      //     tabBarInactiveTextColor="#88b0ac"
      //     initialPage={1}
      //   >
      //     <Calls
      //       tabLabel="CALLS"
      //       CallsData={this.state.Calls}
      //       {...this.props}
      //     />
      //     <Chats
      //       tabLabel="CHATS"
      //       ChatsData={this.state.Chats}
      //       {...this.props}
      //     />
      //     <Contacts
      //       tabLabel="CONTACTS"
      //       ContactsData={this.state.Contacts}
      //       {...this.props}
      //     />
      //   </ScrollableTabView>
      // </View>
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
              name="HomeWA" 
              component={HomeWA} />
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


{/* <RootStack.Screen 
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
component={EditContact} /> */}
