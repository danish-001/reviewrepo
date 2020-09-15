import {
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
} from '../reducer/ReviewActionsTypes'

export const addReviews = (payload = {}) => ({
  type: ADD_REVIEW,
  payload,
})

export const editReviews = (payload = {}) => ({
  type: EDIT_REVIEW,
  payload,
})

export const deleteReviews = (payload = {}) => ({
  type: DELETE_REVIEW,
  payload,
})
