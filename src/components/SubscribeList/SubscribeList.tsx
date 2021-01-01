import React, { useMemo, useState } from 'react';
import { Container, FullFlexContainer, SubscriptionList } from './style';
import SubscribeItem from '@components/SubscribeItem';

interface Service {
  id: number;
}

const SubscribeList = () => {
  const [services, setServices] = useState<Service[] | null>(null);

  const dummyServics: Service[] | null = useMemo(() => {
    const dd = [];
    for (let i = 0; i < 10; i++) {
      dd.push({ id: i });
    }
    return dd;
  }, [services]);

  return (
    <FullFlexContainer>
      <Container>
        <SubscriptionList
          data={dummyServics}
          renderItem={({ item }) => <SubscribeItem id={item.id} />}
          keyExtractor={(item) => String(item.id)}
        />
      </Container>
    </FullFlexContainer>
  );
};

export default SubscribeList;
