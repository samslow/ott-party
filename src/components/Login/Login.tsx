import React, { useState } from 'react';
import { Header } from '@src/shared';
import { ActivityIndicator, ImageSourcePropType } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { FullflexContainer } from '@src/shared/style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '@src/App';
import { useTheme } from '@emotion/react';
import { ThemeProps } from 'theme';
import { ButtonView, IndicatorView } from './style';
import LoginButton from './LoginButton';

interface LoginInfo {
  name: string;
  iconName?: string;
  iconColor?: string;
  image?: ImageSourcePropType;
  onPress: () => void;
}

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const [loading, setLoading] = useState(false);
  const theme: ThemeProps = useTheme();

  const loginInfos: LoginInfo[] = [
    {
      name: '페이스북으로 로그인',
      iconName: 'facebook-square',
      iconColor: '#4267B2',
      onPress: () => {},
    },
    {
      name: '구글로 로그인',
      image: require('@src/images/ic_google.png'),
      onPress: () =>
        onGoogleButtonPress()
          .then(() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'SubscribeList' }],
            }),
          )
          .catch((e) => {
            console.log(e);
          }),
    },
    {
      name: '애플 로그인',
      iconName: 'apple',
      iconColor: '#949494',
      onPress: () => {},
    },
    {
      name: '카카오로 로그인',
      image: require('@src/images/ic_kakao.png'),
      onPress: () => {},
    },
    {
      name: '게스트로 로그인',
      onPress: () => {},
    },
  ];

  const onGoogleButtonPress = async () => {
    setLoading(true);

    GoogleSignin.configure({
      webClientId: process.env.GOOGLE_SIGN_IN_ID,
    });

    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
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
            {loginInfos.map((val, index) => {
              return (
                <LoginButton
                  key={index}
                  name={val.name}
                  iconName={val.iconName}
                  iconColor={val.iconColor}
                  image={val.image}
                  onPress={val.onPress}
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
