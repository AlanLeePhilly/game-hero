let initialState = {
  data: {
    name: "No-Data Jamboree",
    datetime: "2018-04-13T01:57:08.293Z",
    host: {
      id: 0,
      name: "Johnny No-Luck"
    },
    event_participants: [],
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