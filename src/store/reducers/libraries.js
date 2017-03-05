const initialState = {
  hydrated: false,
  selected: 0,
  data: []
}

export default (state = initialState, action) => {
  if (!state.hydrated) {
    state = { ...initialState, ...state, hydrated: true }
  }

  switch (action.type) {
    default:
      return state
  }
}
