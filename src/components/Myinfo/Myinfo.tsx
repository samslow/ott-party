import React from 'react';
import Header from '@src/shared/Header';
import { FullflexContainer } from '@src/shared/style';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '@src/App';

const Myinfo = () => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  const signOut = () => {
    auth()
      .signOut()
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        }),
      );
  };

  return (
    <FullflexContainer>
      <Header title="내 정보" />
      <Text onPress={signOut}>로그아웃</Text>
    </FullflexContainer>
  );
};

export default Myinfo;
