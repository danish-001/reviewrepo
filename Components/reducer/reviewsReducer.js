import * as types from './ReviewActionsTypes'

const initialState = {
  reviews: [
    {
      title: 'Breaking Bad',
      rating: 5,
      author: 'Danish Sheikh',
      body:
        'This TV series is about a simple chemistry teacher who gets cancer which eventually gets him cooking meth with one of his former students to earn more money for his family before he dies and that causes an interesting journey with lots of drama and thrill... Amazing storyline, acting, characters, cinematography and direction.',
      key: Math.random(),
    },
    {
      title: 'Batman : The Dark Knight',
      rating: 5,
      author: 'Danish Sheikh',
      body:
        'A masterpiece by Christopher Nolan that exceeds every aspect of the cinemetography, Acting and Direction.',
      key: Math.random(),
    },
    {
      title: 'Inception',
      rating: 5,
      author: 'Danish Sheikh',
      body: 'A movie that will blow your mind and leave you speechless.',
      key: Math.random(),
    },
    {
      title: 'Avengers : Endgame',
      rating: 5,
      author: 'Danish Sheikh',
      body: 'A movie filled with emotions and a true sci-fi journey.',
      key: Math.random(),
    },
    {
      title: '3 Idiots',
      rating: 5,
      author: 'Danish Sheikh',
      body:
        'A Raj Kumar Hirani movie on Engineering students life that shows what an Engineer student goes through.',
      key: Math.random(),
    },
    {
      title: 'Game Of Thrones',
      rating: 5,
      author: 'Danish Sheikh',
      body:
        'Amazing TV series where you see people play "game of thrones" to get the throne with some ming-blowing CGI scenes, very clever planning and plotting and some legendary fighting scenes.',
      key: Math.random(),
    },
    {
      title: 'PK',
      rating: 5,
      author: 'Danish Sheikh',
      body:
        'A Raj Kumar Hirani movie that point outs the pros and cons of a religion.',
      key: Math.random(),
    },
    {
      title: 'Captain America : The Winter Soldier',
      rating: 4,
      author: 'Danish Sheikh',
      body:
        'A well made movie from Marvel that shows amazing one to one combats in an excellent way.',
      key: Math.random(),
    },
    {
      title: 'Race 3',
      rating: 1,
      author: 'Danish Sheikh',
      body: 'A movie that detroyed a movie series that was doing much better.',
      key: Math.random(),
    },
    {
      title: 'Total Dhamaal',
      rating: 2,
      author: 'Danish Sheikh',
      body:
        'Successfully ruined a classic comedy movie series(both Double Dhamaal and this one).',
      key: Math.random(),
    },
    {
      title: 'Interstellar',
      rating: 5,
      author: 'Danish Sheikh',
      body:
        'Another masterpiece by Christopher Nolan leave you totally speechless.',
      key: Math.random(),
    },
    {
      title: 'Black Panther',
      rating: 4,
      author: 'Danish Sheikh',
      body:
        'An amazing Marvel movie showing you some of the traditions of the african tribes and a perfect CGI journey.',
      key: Math.random(),
    },
    {
      title: 'Undisputed 2',
      rating: 4,
      author: 'Danish Sheikh',
      body:
        'A movie with unbelievable action scenes and packs almost every main-stream martial arts.',
      key: Math.random(),
    },
  ],
}

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_REVIEW:
      return {
        ...state,
        reviews: [...[action.payload.review], ...state.reviews],
      }
    case types.EDIT_REVIEW:
      const item = action.payload.review
      const reviewsList = []

      if (state.reviews) {
        state.reviews.map((review) => {
          const { key } = review
          let value = review

          if (key === item.key) value = item
          reviewsList.push(value)
        })
      }

      return {
        ...state,
        reviews: reviewsList,
      }
    case types.DELETE_REVIEW:
      const key = action.payload.key
      const filterReview = state.reviews.filter((review) => review.key !== key)

      return {
        ...state,
        reviews: filterReview,
      }

    // const newState = state.reviews.filter((review) => {
    //   review !== action.key
    // })
    // return newState
    // key = action.payload.key
    // review = action.payload.review
    // if (state.reviews) {
    //   state.reviews.filter((review) => {
    //     review !== action.payload.key
    //   })
    // }
    default:
      return { ...state }
  }
}

export default reviewsReducer
