import { GET_DEFAULT } from '../actions/types'

const initialState = {
  default: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEFAULT:
      return { ...state, default: action.data }
    default:
      return state
  }
}
