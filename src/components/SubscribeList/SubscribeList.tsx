import React, { useMemo, useState } from 'react';
import { SubscriptionList } from './style';
import SubscribeItem from '@components/SubscribeItem';
import { FullflexContainer } from '@src/shared/style';

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
    <FullflexContainer>
      <SubscriptionList
        data={dummyServics}
        renderItem={({ item }) => <SubscribeItem id={item.id} />}
        keyExtractor={(item) => String(item.id)}
      />
    </FullflexContainer>
  );
};

export default SubscribeList;
