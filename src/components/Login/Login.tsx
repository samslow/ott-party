import React, { useState } from 'react';
import { Header } from '@src/shared';
import { ActivityIndicator } from 'react-native';
import { FullflexContainer } from '@src/shared/style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '@src/App';
import { useTheme } from '@emotion/react';
import { ThemeProps } from 'theme';
import { ButtonView, IndicatorView } from './style';
import LoginButton from './LoginButton';

import { loginInfos, LoginInfo } from '@src/utils/ott_auth';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const [loading, setLoading] = useState(false);
  const theme: ThemeProps = useTheme();

  const signIn = (loginInfo: LoginInfo) => {
    loginInfo
      .signIn()
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'SubscribeList' }],
        }),
      )
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <FullflexContainer>
      {loading ? (
        <IndicatorView>
          <ActivityIndicator size="large" color={theme.primary} />
        </IndicatorView>
      ) : (
        <>
          <Header title="로그인 페이지" noBack />
          <ButtonView style={{ marginTop: 40 }}>
            {loginInfos.map((loginInfo, index) => {
              return (
                <LoginButton
                  key={index}
                  name={loginInfo.name}
                  iconName={loginInfo.iconName}
                  iconColor={loginInfo.iconColor}
                  image={loginInfo.image}
                  onPress={() => {
                    setLoading(true);
                    signIn(loginInfo);
                  }}
                />
              );
            })}
          </ButtonView>
        </>
      )}
    </FullflexContainer>
  );
};

export default Login;
