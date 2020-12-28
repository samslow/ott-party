import React from 'react';
import {Text} from 'react-native';
import Temp from '@components/Temp';
import styled from '@emotion/native';

const App = () => {
  return (
    <See>
      <Text>helloasdfadf</Text>
      <Temp />
    </See>
  );
};

export default App;

const See = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
