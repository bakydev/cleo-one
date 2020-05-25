import React from 'react';
import * as routes from '../../constants';
import { Wrapper, ErrorTitle, ErrorSubTitle, ReturnLink } from './styled';

/**
 * 404 - Page Not Found.
 * @returns {*}
 */
const NotFound = () => (
  <Wrapper>
    <ErrorTitle>404</ErrorTitle>
    <ErrorSubTitle>Page not found</ErrorSubTitle>
    <div>
      <ReturnLink to={routes.USER_PROFILE_LINK}>Return to main page</ReturnLink>
    </div>
  </Wrapper>
);

export default NotFound;
