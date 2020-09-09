import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import reviewReducer from '../store'

const reducers = combineReducers({
  form,
  reviewReducer,
})

export default createStore(reducers)
