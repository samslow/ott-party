import React, { useState, useEffect } from 'react';
import { Txt } from '@src/shared';
import { Text, View } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: process.env.GOOGLE_SIGN_IN_ID,
});

const Login = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged((userState) => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  if (loading) return null;

  if (!user) {
    return (
      <View>
        <Text
          onPress={() =>
            onGoogleButtonPress()
              .then(() => console.log('Signed in with Google!'))
              .catch((e) => {
                console.log(e);
              })
          }>
          Google 로그인
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Txt>Hello</Txt>
      <Text>{user.email}</Text>
      <Text onPress={() => signOut()}>로그아웃</Text>
    </View>
  );
};

export default Login;
