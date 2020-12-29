import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubscribeList from '@stacks/SubscribeList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SubscribeList">
        <Stack.Screen name="SubscribeList" component={SubscribeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
