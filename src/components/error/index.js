import React from 'react';
import { Wrapper, Title } from './styled';

const Error = ({ children }) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};

export default Error;
