import { useTheme } from '@emotion/react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '@src/App';
import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeProps } from 'theme';
import Txt from '../Txt';
import { HeaderContainer, NullBox, TouchableIconBox } from './style';

interface Props {
  title: string;
  noBack?: boolean;
}

export default function Header({ title, noBack }: Props) {
  const theme: ThemeProps = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const route = useRoute();

  return (
    <HeaderContainer>
      {noBack ? (
        <NullBox />
      ) : (
        <TouchableIconBox activeOpacity={0.5} onPress={navigation.goBack}>
          <SimpleLineIcons name="arrow-left" size={15} color={theme.primary} />
        </TouchableIconBox>
      )}
      <Txt size={20} fontWeight="900">
        {title}
      </Txt>
      {route.name === 'SubscribeList' ? (
        <TouchableIconBox
          activeOpacity={0.5}
          onPress={() => navigation.navigate('MyInfo')}>
          <Ionicons name="person" size={17} color={theme.primary} />
        </TouchableIconBox>
      ) : (
        <NullBox />
      )}
    </HeaderContainer>
  );
}
