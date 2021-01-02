import React, { useMemo } from 'react';
import {
  PayStatusContainer,
  PayStatusActive,
  PayStatusInActive,
  PayStatusPrice,
} from './style';
import { Txt } from '@src/shared';

interface PayStatusProps {
  totalAmount: number;
  paidAmount: number;
}

const PayStatus = ({ totalAmount, paidAmount }: PayStatusProps) => {
  const payStatusActiveWidth: number = useMemo(() => {
    return (paidAmount / totalAmount) * 100;
  }, [paidAmount, totalAmount]);

  return (
    <PayStatusContainer>
      <PayStatusInActive />
      {paidAmount == 0 || totalAmount == 0 ? null : (
        <PayStatusActive width={payStatusActiveWidth} />
      )}
      <PayStatusPrice>
        <Txt size={14} fontWeight={'700'} color={'rgba(127, 102, 255, 1)'}>
          {`₩ ${paidAmount.toLocaleString()}`}
        </Txt>
        <Txt size={14} fontWeight={'700'} color={'#C4C4C4'}>
          {`₩ ${(totalAmount - paidAmount).toLocaleString()}`}
        </Txt>
      </PayStatusPrice>
    </PayStatusContainer>
  );
};

export default PayStatus;
