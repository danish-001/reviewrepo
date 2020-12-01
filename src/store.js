import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import reviewsReducer from './reducer/reviewsReducer'

const reducers = combineReducers({
  form,
  reviewsReducer,
})

export default createStore(reducers)
