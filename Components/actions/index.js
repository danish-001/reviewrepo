import { ADD_REVIEW } from '../reducer/ReviewActionsTypes'

export const addReviews = (payload = {}) => ({
  type: ADD_REVIEW,
  payload,
})
