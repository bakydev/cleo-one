import {
  GET_USER_REPOS_PENDING,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REPOS_FAILURE,
  FILTER_REPOS_BY_NAME,
  FILTER_REPOS_BY_NAME_INVALIDATE,
  SORT_REPOS_BY_STARGAZERS_COUNT_ASC,
  SORT_REPOS_BY_STARGAZERS_COUNT_DESC
} from '../constants';

const getUserReposPending = () => ({
  type: GET_USER_REPOS_PENDING
});

const getUserReposSuccess = (repos) => ({
  type: GET_USER_REPOS_SUCCESS,
  payload: {
    ...repos
  }
});

const getUserReposFailure = (error) => ({
  type: GET_USER_REPOS_FAILURE,
  payload: {
    error
  }
});

const filterReposByName = (repoName) => ({
  type: FILTER_REPOS_BY_NAME,
  payload: repoName
});

const filterReposByNameInvalidate = () => ({
  type: FILTER_REPOS_BY_NAME_INVALIDATE
});

const sortReposByStargazersCountAsc = () => ({
  type: SORT_REPOS_BY_STARGAZERS_COUNT_ASC
});

const sortReposByStargazersCountDesc = () => ({
  type: SORT_REPOS_BY_STARGAZERS_COUNT_DESC
});

export default {
  getUserReposPending,
  getUserReposSuccess,
  getUserReposFailure,
  filterReposByName,
  filterReposByNameInvalidate,
  sortReposByStargazersCountAsc,
  sortReposByStargazersCountDesc
};
