let initialState = {
  query: '',
  results: [],
  loading: false,
  error: false
}

export default function gameSearch(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULTS_BEGIN':
      return Object.assign({}, state, {
        loading: true
      })
    case 'FETCH_SEARCH_RESULTS_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        results: action.results  
      })
    case 'FETCH_SEARCH_RESULTS_FAILURE':
      return Object.assign({}, state, {
        loading: false,
        error: true
      })
    case 'SET_QUERY':
      return Object.assign({}, state, {
        query: action.query
      })
    default:
      return state
  }
}