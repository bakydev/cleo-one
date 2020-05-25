import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../constants';
import UserProfile from '../containers/UserProfile';
import UserRepos from '../containers/UserRepos';
import About from '../containers/About';
import NotFound from '../containers/NotFound';

/**
 * Routes.
 * @returns {*}
 */
const Routes = () => (
  <Switch>
    <Route exact path={routes.USER_PROFILE_LINK} component={UserProfile} />
    <Route exact path={routes.USER_REPOS_LINK} component={UserRepos} />
    <Route exact path={routes.ABOUT_LINK} component={About} />
    <NotFound />
  </Switch>
);

export default Routes;
