export const FETCH_SEARCH_RESULTS_BEGIN   = 'FETCH_SEARCH_RESULTS_BEGIN';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_RESULTS_FAILURE = 'FETCH_SEARCH_RESULTS_FAILURE';

export const setQuery = (query) => ({
  type: 'SET_QUERY',
  query: query
})

export const fetchSearchResultsBegin = () => ({
  type: FETCH_SEARCH_RESULTS_BEGIN,
  loading: true
});

export const fetchSearchResultsSuccess = results => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  results: results,
  loading: false
})

export const fetchSearchResultsFailure = error => ({
  type: FETCH_SEARCH_RESULTS_FAILURE,
  error: true,
  loading: false
})


export const fetchSearchResults = (query) => (dispatch) => {
    dispatch(fetchSearchResultsBegin());
    fetch(`/api/v1/games/search?query=${query}`)
      .then(handleErrors)
      .then(res => {
        dispatch(fetchSearchResultsSuccess(res)) })
      .catch(error => {
        console.log(error)
        dispatch(fetchSearchResultsFailure(error))
      }
      );
  }


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}