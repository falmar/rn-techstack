const initialState = {
  hydrated: false,
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
