import { Txt } from '@src/shared';
import Header from '@src/shared/Header';
import { FullflexContainer } from '@src/shared/style';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@emotion/react';
import { ThemeProps } from 'theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from './Input';
import { UserView, IconBox, SignOutButton, InputView, Row } from './style';

const Myinfo = () => {
  const theme: ThemeProps = useTheme();
  return (
    <FullflexContainer>
      <Header title="내 정보" />
      <SafeAreaView
        style={{
          position: 'relative',
          flex: 1,
        }}>
        <UserView>
          <IconBox>
            <Ionicons name="person" size={44} color={theme.primary} />
          </IconBox>
          <Txt size={15} color={theme.text} fontWeight={'500'}>
            사용자 이름
          </Txt>
        </UserView>
        <InputView>
          <Txt size={15} color={theme.text} fontWeight={'700'}>
            납부 계좌
          </Txt>
          <Row marginTop={20}>
            <Input width={'49%'} placeHolder={'은행'} />
            <Input width={'49%'} placeHolder={'예금주'} />
          </Row>
          <Row marginTop={8}>
            <Input placeHolder={'계좌번호'} keyboardType={'number-pad'} />
          </Row>
        </InputView>
        <SignOutButton>
          <Txt size={20} color={theme.buttonText} fontWeight={'700'}>
            로그아웃
          </Txt>
        </SignOutButton>
      </SafeAreaView>
    </FullflexContainer>
  );
};

export default Myinfo;
