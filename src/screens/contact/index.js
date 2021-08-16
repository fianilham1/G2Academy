import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
import ContactList from './contactlist';
import ContactDetail from './contactdetail';
import EditContact from './editContact';
import AddContact from './addContact';

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList} from 'react-native';

const ContactStack = createNativeStackNavigator();

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }

      render() { 
        return (  
            <ContactStack.Navigator 
                initialRouteName="ContactList"
                screenOptions={{
                    headerShown: false
                }}>
                    <ContactStack.Screen 
                    name="ContactList" 
                    component={ContactList}
                    options={() => ({
                        title:"Contact List" ,
                    })}/>
                    <ContactStack.Screen 
                    name="ContactDetail" 
                    component={ContactDetail} 
                    options={({route}) => ({
                        title:route.params.itemData.name
                    })}/>
                    <ContactStack.Screen 
                    name="EditContact" 
                    component={EditContact} />
                       <ContactStack.Screen 
                    name="AddContact" 
                    component={AddContact} />
            </ContactStack.Navigator>
        );
    }
}
 
export default Contact;

