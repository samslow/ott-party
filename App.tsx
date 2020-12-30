import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubscribeList from '@stacks/SubscribeList';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme';
import Myinfo from '@components/Myinfo';
import { Appearance } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [colorScheme, setColorScheme] = useState<
    'light' | 'dark' | null | undefined
  >(Appearance.getColorScheme());

  if (!colorScheme) {
    return null;
  }

  Appearance.addChangeListener(({ colorScheme }) => {
    setColorScheme(colorScheme);
  });

  return (
    <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SubscribeList" headerMode="screen">
          <Stack.Screen
            name="SubscribeList"
            component={SubscribeList}
            options={{
              title: `구독 현황`,
              headerRight: () => <Myinfo />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
