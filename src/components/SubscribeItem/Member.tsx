import React from 'react';
import { MemberView } from './style';
import { Image, Dimensions } from 'react-native';
import { Txt } from '@src/shared';

interface MemberProps {
  name: string;
  isPaid: boolean;
}

const Member = ({ name, isPaid }: MemberProps) => {
  return (
    <MemberView screenWidth={Dimensions.get('window').width}>
      <Image
        style={{ height: 18, width: 18 }}
        source={
          isPaid
            ? require('@src/images/ic_pay_status_active.png')
            : require('@src/images/ic_pay_status_inactive.png')
        }
      />
      <Txt
        size={13}
        fontWeight={'700'}
        color={'rgba(196, 196, 196, 1)'}
        style={{ marginLeft: 9 }}>
        {name}
      </Txt>
    </MemberView>
  );
};

export default Member;
