// eslint-disable-next-line no-unused-vars
import React from 'react';
import StyledGrid from './styled';

const Grid = ({ children }) => {
  return (
    <>
      <StyledGrid>{children}</StyledGrid>
    </>
  );
};

export default Grid;
