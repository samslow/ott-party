import { ImageSourcePropType } from 'react-native';
import Config from 'react-native-config';
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth/lib/index';
import { GoogleSignin } from '@react-native-community/google-signin';

interface LoginInfo {
  name: string;
  iconName?: string;
  iconColor?: string;
  image?: ImageSourcePropType;
  signIn: () => Promise<FirebaseAuthTypes.UserCredential>;
}

export const loginInfos: LoginInfo[] = [
  //   {
  //     name: '페이스북으로 로그인',
  //     iconName: 'facebook-square',
  //     iconColor: '#4267B2',
  //     signIn: () => {},
  //   },
  {
    name: '구글로 로그인',
    image: require('@src/images/ic_google.png'),
    signIn: async (): Promise<FirebaseAuthTypes.UserCredential> => {
      GoogleSignin.configure({
        webClientId: Config.GOOGLE_SIGN_IN_ID,
      });

      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    },
  },
  //   {
  //     name: '애플 로그인',
  //     iconName: 'apple',
  //     iconColor: '#949494',
  //     signIn: () => {},
  //   },
  //   {
  //     name: '카카오로 로그인',
  //     image: require('@src/images/ic_kakao.png'),
  //     signIn: () => {},
  //   },
  {
    name: '게스트로 로그인',
    signIn: () => {
      return auth().signInAnonymously();
    },
  },
];

export const isSignedIn = (): boolean => {
  return auth().currentUser !== null;
};
