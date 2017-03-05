import * as types from '../constants/libraries'

export const selectLibrary = libraryId => ({
  type: types.SELECT_LIBRARY,
  payload: libraryId
})
