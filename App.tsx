import Myinfo from '@components/Myinfo';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubscribeList from '@stacks/SubscribeList';
import React, { useEffect, useState } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { darkTheme, lightTheme } from './theme';

const Stack = createStackNavigator();

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
  }, []);

  return (
    <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
      <NavigationContainer>
        <StatusBar
          barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        />
        <Stack.Navigator initialRouteName="SubscribeList" headerMode="float">
          <Stack.Screen
            name="SubscribeList"
            component={SubscribeList}
            options={{
              title: `구독 현황`,
              headerRight: () => <Myinfo />,
              headerStyle: {
                backgroundColor:
                  colorScheme === 'light'
                    ? lightTheme.background
                    : darkTheme.background,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
