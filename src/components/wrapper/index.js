import React from 'react';
import { StyledWrapper } from './styled';

const Wrapper = ({
  children,
  overlay,
  display,
  maxWidth,
  margin,
  alignItems
}) => {
  return (
    <StyledWrapper
      maxWidth={maxWidth}
      margin={margin}
      display={display}
      alignItems={alignItems}
      overlay={overlay}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
