import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import reviewsReducer from '../../Components/reducer/reviewsReducer'

const reducers = combineReducers({
  form,
  reviewsReducer,
})

export default createStore(reducers)
