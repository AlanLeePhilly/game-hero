const initialState = {
  name: '',
  datetime: null
}

export default function event_form(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.name
      })
    case 'SET_DATETIME':
      return Object.assign({}, state, {
        dateTime: action.dateTime
      })

    default:
      return state
  }
}
