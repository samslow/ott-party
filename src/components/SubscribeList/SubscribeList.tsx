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
  const renderItem = ({ item }) => <SubscribeItem id={item.id} />;

  return (
    <FullFlexContainer>
      <Container>
        <SubscriptionList
          data={getDummyData()}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </FullFlexContainer>
  );
};

export default SubscribeList;
