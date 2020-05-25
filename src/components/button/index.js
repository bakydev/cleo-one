import React from 'react';
import { StyledButton } from './styled';
import Loader from '../loader';

const Button = ({ loading, flex, children, ...props }) => {
  return (
    <StyledButton flex={flex} {...props}>
      {loading ? <Loader small white /> : children}
    </StyledButton>
  );
};

export default Button;
