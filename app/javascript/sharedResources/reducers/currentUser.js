let initialState = {
  data: {
    name: "Guest",
    id: 0
  },
  loading: false,
  error: false
}

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CURRENT_USER_BEGIN':
      return Object.assign({}, state, {
        loading: true
      })
    case 'FETCH_CURRENT_USER_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        data: action.currentUser  
      })
    case 'FETCH_CURRENT_USER_FAILURE':
      return Object.assign({}, state, {
        loading: false,
        error: true
      })
    default:
      return state
  }
}