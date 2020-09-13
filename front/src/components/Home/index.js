import React from 'react';
import { ContainerWrapper } from './styles';

import Screen1 from './screen1/index';
import Screen2 from './screen2';

const Home = () => {
  return (
    <ContainerWrapper>
      <Screen1 />
      <Screen2 />
    </ContainerWrapper>
  );
};

export default Home;
