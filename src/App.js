import React from 'react'
import { Button } from 'react-native-elements';
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './router'
import { SafeAreaProvider } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeText}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
  <SafeAreaProvider>
    <AppNavigator/>
  </SafeAreaProvider>
 
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen 
    //       name="Home" 
    //       component={HomeScreen} />
    //     <Stack.Screen 
    //       name="Login"
    //       component={Login} />
    //     <Stack.Screen 
    //       name="Details" 
    //       component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App



const styles = StyleSheet.create({
  homeText : { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    fontSize: 30
  }
})
