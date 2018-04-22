let initialState = {
  games: [],
  loading: false,
  error: false,
  errorMessage: ''
}

export default function gamesCollection(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_GAMES_COLLECTION_BEGIN':
      return Object.assign({}, state, {
        loading: true
      })
    case 'FETCH_GAMES_COLLECTION_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        games: action.games  
      })
    case 'FETCH_GAMES_COLLECTION_FAILURE':
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorMessage: action.errorMessage
      })
    default:
      return state
  }
}