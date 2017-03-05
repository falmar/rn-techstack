import data from '../dummy/libraries.json'

import * as types from '../constants/libraries'

const initialState = {
  hydrated: false,
  selected: null,
  data: data
}

export default (state = initialState, action) => {
  if (!state.hydrated) {
    state = { ...initialState, ...state, hydrated: true }
  }

  switch (action.type) {
    case types.SELECT_LIBRARY:
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state
  }
}
