import { GETJOKE, START } from './actionTypes'

const initialState = {
  loading: null,
  joke: null
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
      }
    case GETJOKE:
      return {
        ...state,
        loading: false,
        joke: action.payload
      }
    default:
      return state
  }
}

export default reducer