import React, { useEffect, useRef } from 'react';
import { GITHUB_URL } from '../../config';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../../components/wrapper';
import Grid from '../../components/grid';
import { Label } from '../../components/checkbox/styled';
import Input from '../../components/input';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import List from '../../components/list';
import allActions from '../../actions';
import * as ROUTES from '../../constants';
import axios from 'axios';

/**
 * User profile page.
 * @returns {*}
 */
const UserRepos = ({ history, match }) => {
  // Reference for input
  const filterRef = useRef(null);

  // Redux dispatcher
  const dispatch = useDispatch();

  // Router params
  const username = match.params.username;

  // Props from Redux
  const reposObj = useSelector((state) => state.repos.list);
  const filteredRepo = useSelector((state) => state.repos.filteredRepo);

  // Converting Object into Array
  const reposArr = Object.values(reposObj);

  useEffect(() => {
    if (!username) {
      history.push(ROUTES.USER_PROFILE_LINK);
    }
    dispatch(fetchUserRepos(username));
    // eslint-disable-next-line
  }, [username]);

  /**
   * Fetch user repos.
   * @param {username} username
   */
  const fetchUserRepos = (username) => {
    return async (dispatch) => {
      dispatch(allActions.reposActions.getUserReposPending());

      try {
        const response = await axios.get(`${GITHUB_URL}/${username}/repos`);
        dispatch(allActions.reposActions.getUserReposSuccess(response.data));
      } catch (error) {
        dispatch(
          allActions.reposActions.getUserReposFailure(
            error.response.data.message
          )
        );
      }
    };
  };

  /**
   * Handle Repo filtering.
   * @param {repoName} repoName
   */
  const handleRepoFilter = (repoName) => {
    dispatch(allActions.reposActions.filterReposByName(repoName));
  };

  /**
   * Handle input filter change.
   * @param {e} event
   */
  const handleInputFilterChange = (e) => {
    if (e.target.value === '') {
      dispatch(allActions.reposActions.filterReposByNameInvalidate());
    }
  };

  /**
   * Handle checkbox sorting by stargazers count.
   * @param {e} event
   */
  const handleSortRepos = (e) => {
    const isStargazersCountChecked = e.target.checked;
    if (isStargazersCountChecked) {
      dispatch(allActions.reposActions.sortReposByStargazersCountDesc());
    } else {
      dispatch(allActions.reposActions.sortReposByStargazersCountAsc());
    }
  };

  return (
    <>
      <Grid>
        <Wrapper
          display="flex"
          maxWidth="600px"
          margin="30px auto"
          alignItems="center"
        >
          <Button onClick={() => history.goBack()}>Back to Search</Button>
          <Label htmlFor="sort-repo">Highest first</Label>
          <Checkbox>
            <input
              id="sort-repo"
              type="checkbox"
              className="switch-input"
              name="sort-repo"
              onChange={(e) => handleSortRepos(e)}
            />
            <label htmlFor="sort-repo" className="switch-label" />
          </Checkbox>
        </Wrapper>
        <Wrapper display="flex" maxWidth="600px">
          <Input
            type="text"
            ref={filterRef}
            placeholder="Filter by repo name..."
            onChange={(e) => handleInputFilterChange(e)}
          />
          <Button
            flex="1"
            onClick={() => handleRepoFilter(filterRef.current.value)}
          >
            Filter
          </Button>
        </Wrapper>
        <Wrapper>
          {reposArr && filteredRepo.length === 0
            ? reposArr.map(({ name }, idx) => <List key={idx}>{name}</List>)
            : filteredRepo.map(({ name }, idx) => (
                <List key={idx}>{name}</List>
              ))}
        </Wrapper>
      </Grid>
    </>
  );
};

export default UserRepos;
