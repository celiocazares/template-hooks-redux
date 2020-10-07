import rootReducer from './reducers';

import { combineReducers } from 'redux'
import videosReducer from './reducers/videosReducer'

const reducers = combineReducers({
  videosReducer
})

const store = createStore(reducers)

export default store;