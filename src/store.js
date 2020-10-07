import { combineReducers, createStore } from 'redux'
import usersReducer from './reducers/usersReducer'

const reducers = combineReducers({
  usersReducer
})

const store = createStore(reducers)

export default store;