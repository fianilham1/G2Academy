import React from 'react'
import AppNavigator from './router'
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  return (
  <SafeAreaProvider>
    <AppNavigator/>
  </SafeAreaProvider>
  );
}

export default App
