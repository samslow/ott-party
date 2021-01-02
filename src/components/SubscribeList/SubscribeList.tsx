import React, { useMemo, useState } from 'react';
import { SubscriptionList } from './style';
import SubscribeItem from '@components/SubscribeItem';
import { FullflexContainer } from '@src/shared/style';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from '@src/App';
import Header from '@src/shared/Header';

interface Service {
  id: number;
}

const SubscribeList = () => {
  const [services, setServices] = useState<Service[] | null>(null);
  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  const dummyServics: Service[] | null = useMemo(() => {
    const dd = [];
    for (let i = 0; i < 10; i++) {
      dd.push({ id: i });
    }
    return dd;
  }, [services]);

  // FIXME
  return (
    <FullflexContainer>
      <Header title="구독 리스트" noBack />
      <SubscriptionList
        data={dummyServics}
        renderItem={({ item }) => <SubscribeItem id={item.id} />}
        keyExtractor={(item) => String(item.id)}
      />
      <Button
        title="구독 추가하기"
        onPress={() => navigation.navigate('Subscribe')}
      />
    </FullflexContainer>
  );
};

export default SubscribeList;
