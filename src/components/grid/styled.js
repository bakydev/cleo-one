// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  padding-left: ${({ pl }) => (pl ? pl : '0')};
  padding-right: ${({ pr }) => (pr ? pr : '0')};
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  overflow: hidden;
`;

export default StyledGrid;
