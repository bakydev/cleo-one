import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GITHUB_URL } from '../../config';
import Wrapper from '../../components/wrapper';
import Grid from '../../components/grid';
import Card from '../../components/card';
import Input from '../../components/input';
import Button from '../../components/button';
import Error from '../../components/error';
import Loader from '../../components/loader';
import allActions from '../../actions';
import axios from 'axios';

/**
 * Main page.
 * @returns {*}
 */
const UserProfile = () => {
  const searchRef = useRef(null);

  const user = useSelector((state) => state.user);
  const errorMessage = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  /**
   * Fetch user profile.
   * @param {username} username
   */
  const fetchUserProfile = (username) => {
    return async (dispatch) => {
      dispatch(allActions.userActions.getUserPending());

      try {
        const response = await axios.get(
          `${GITHUB_URL}/${username.toLowerCase()}`
        );
        dispatch(allActions.userActions.getUserSuccess(response.data));
      } catch (error) {
        dispatch(
          allActions.userActions.getUserFailure(error.response.data.message)
        );
      }
    };
  };

  /**
   * Handle search function.
   */
  const handleSearchClick = () => {
    const searchValue = searchRef.current.value
    if (searchValue === '') return
    dispatch(fetchUserProfile(searchValue));
  };

  return (
    <>
      <Grid>
        <Wrapper display="flex" maxWidth="600px">
          <Input type="text" ref={searchRef} placeholder="Find a user..." />
          <Button flex="1" onClick={handleSearchClick}>
            Search
          </Button>
        </Wrapper>
        <Wrapper display="flex" maxWidth="600px">
          {user && !errorMessage && Object.keys(user).length !== 0 && (
            <Card {...user} />
          )}
          {errorMessage && <Error>{errorMessage}</Error>}
        </Wrapper>
      </Grid>
    </>
  );
};

export default UserProfile;
