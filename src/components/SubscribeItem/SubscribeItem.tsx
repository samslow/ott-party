import React from 'react';
import { ServiceCard } from './style';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

interface SubscribeItemProps {
  id: number;
}

const SubscribeItem = ({ id }: SubscribeItemProps) => {
  return (
    <ServiceCard>
      <CardHeader />
      <CardBody />
    </ServiceCard>
  );
};

export default SubscribeItem;
