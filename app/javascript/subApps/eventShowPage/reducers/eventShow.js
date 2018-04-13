let initialState = {
  data: {
    name: "Guest",
    host: {
      id: 0,
      name: ""
    },
    participants: [],
    games: []
  }
}

export default function eventShow(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_EVENT_SHOW_SUCCESS':
      return Object.assign({}, state, {
        data: action.event
      })
    default:
      return state
  }
}