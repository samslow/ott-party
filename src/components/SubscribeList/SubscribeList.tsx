import React from 'react';
import { Container, FullFlexContainer, SubscriptionList } from './style';
import SubscribeItem from '@components/SubscribeItem';

interface SubscribeItemData {
  id: number;
}

const getDummyData = (): SubscribeItemData[] => {
  const dd = [];
  for (let i = 0; i < 10; i++) {
    dd.push({ id: i });
  }
  return dd;
};

const SubscribeList = () => {
  return (
    <FullFlexContainer>
      <Container>
        <SubscriptionList
          data={getDummyData()}
          renderItem={({ item }) => <SubscribeItem id={item.id} />}
          keyExtractor={(item) => String(item.id)}
        />
      </Container>
    </FullFlexContainer>
  );
};

export default SubscribeList;
