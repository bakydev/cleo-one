import {
  GET_USER_REPOS_PENDING,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REPOS_FAILURE,
  FILTER_REPOS_BY_NAME,
  FILTER_REPOS_BY_NAME_INVALIDATE,
  SORT_REPOS_BY_STARGAZERS_COUNT_ASC,
  SORT_REPOS_BY_STARGAZERS_COUNT_DESC
} from '../constants';

const initialState = {
  list: [],
  filteredRepo: [],
  loading: false
};

const userReposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REPOS_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_USER_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: { ...action.payload }
      };
    case GET_USER_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FILTER_REPOS_BY_NAME:
      // The value received from our presentational component
      const repoName = action.payload;

      // Convert object into array
      const reposList = Object.values(state.list);

      // Filtered Repo
      const filteredRepo = reposList.filter((repo) => {
        return repo.name.toLowerCase().includes(repoName);
      });

      return {
        ...state,
        filteredRepo
      };
    case FILTER_REPOS_BY_NAME_INVALIDATE:
      return {
        ...state,
        filteredRepo: []
      };
    case SORT_REPOS_BY_STARGAZERS_COUNT_ASC:
      // Convert object into array
      const reposListForAscSort = Object.values(state.list);

      // Sorting by ascending order
      const sortedByStargazersCountAsc = reposListForAscSort.sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) {
          return 1;
        }
        if (b.stargazers_count > a.stargazers_count) {
          return -1;
        }
        return 0;
      });

      return {
        ...state,
        list: { ...sortedByStargazersCountAsc }
      };
    case SORT_REPOS_BY_STARGAZERS_COUNT_DESC:
      // Convert object into array
      const reposListForDescSort = Object.values(state.list);

      // Sorting by descending order
      const sortedByStargazersCountDesc = reposListForDescSort.sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) {
          return -1;
        }
        if (b.stargazers_count > a.stargazers_count) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        list: { ...sortedByStargazersCountDesc }
      };
    default:
      return state;
  }
};

export default userReposReducer;
