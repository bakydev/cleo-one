import React from 'react';
import Navbar from '../navbar';
import { StyledHeader } from './styled';
import Grid from '../grid';

/**
 * Header.
 * @returns {*}
 */
const Header = () => {
  return (
    <StyledHeader>
      <Grid>
        <Navbar />
      </Grid>
    </StyledHeader>
  );
};

export default Header;
