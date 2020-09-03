export const reducerName = (state = , action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return profile
    default:
      return state
  }
}