import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Myinfo from '@stacks/MyInfo';
import Subscribe from '@stacks/Subscribe';
import SubscribeList from '@stacks/SubscribeList';
import Login from '@stacks/Login';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { darkTheme, lightTheme } from '../theme';

import { isSignedIn } from '@src/utils/ott_auth';

export type StackParams = {
  SubscribeList: undefined;
  Subscribe: undefined;
  MyInfo: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<StackParams>();

export default function App() {
  const [colorScheme, setColorScheme] = useState<
    'light' | 'dark' | null | undefined
  >(Appearance.getColorScheme());

  if (!colorScheme) {
    return null;
  }

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    const authSubscriber = auth().onAuthStateChanged((_) => {});

    return authSubscriber;
  }, []);

  return (
    <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
      <NavigationContainer>
        <StatusBar
          barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        />
        <Stack.Navigator
          initialRouteName={isSignedIn() ? 'SubscribeList' : 'Login'}
          headerMode="screen">
          <Stack.Screen
            name="SubscribeList"
            component={SubscribeList}
            options={{
              title: '구독 현황',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Subscribe"
            component={Subscribe}
            options={{
              title: '구독 추가',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MyInfo"
            component={Myinfo}
            options={{
              title: '내 정보',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '로그인',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
