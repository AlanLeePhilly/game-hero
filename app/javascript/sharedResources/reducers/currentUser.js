let initialState = {
  data: {
    name: "Guest",
    id: 0
  }
}


export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CURRENT_USER_SUCCESS':
      return Object.assign({}, state, {
        data: action.currentUser
      })
    default:
      return state
  }
}