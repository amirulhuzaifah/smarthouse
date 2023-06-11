import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import LoginPage from './LoginPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details 1" component={Page1} />
      <Stack.Screen name="Details 2" component={Page2} />
      <Stack.Screen name="Details 3" component={Page3} />
      <Stack.Screen name="Details 4" component={Page4} />
      <Stack.Screen name="LoginPage" component={LoginPage}/>
</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;