import {createStore, combineReducers} from 'redux'

import libraries from './reducers/libraries'

const reducers = combineReducers({
  libraries
})

export default (initialState) => {
  return createStore(reducers, initialState)
}
