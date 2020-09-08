export const validate = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = 'A movie/series title is required'
  }

  if (!values.body) {
    errors.body = 'Please give a description'
  } else if (values.body.length < 8) {
    errors.body = 'Description must be 8 characters long'
  }

  if (!values.rating) {
    errors.rating = 'Please give it a rating'
  } else if (isNaN(Number(values.rating))) {
    errors.rating = 'Rating must be a number'
  } else if (Number(values.rating) < 0 || Number(values.rating) > 5) {
    errors.rating = 'Rating must be between (1-5)'
  }
  return errors
}
