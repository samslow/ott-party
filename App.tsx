import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubscribeList from '@stacks/SubscribeList';
import { ThemeProvider } from '@emotion/react';
import Theme from './theme';
import Myinfo from '@components/Myinfo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SubscribeList" headerMode="screen">
          <Stack.Screen
            name="SubscribeList"
            component={SubscribeList}
            options={{
              title: '구독 현황',
              headerRight: () => <Myinfo />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
