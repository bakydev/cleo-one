import React from 'react';
import * as ROUTES from '../../constants';
import { Wrapper, Logo } from './styled';
import logo from '../../assets/svg/react.svg';

/**
 * Navigation Bar.
 * @returns {*}
 */
const Navbar = () => (
  <Wrapper>
    <Logo to={ROUTES.USER_PROFILE_LINK}>
      <img src={logo} alt="React logo" />
      <span>React SPA</span>
    </Logo>
  </Wrapper>
);

export default Navbar;
