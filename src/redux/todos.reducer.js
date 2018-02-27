import { ADD_TODO, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILED } from './actions';


let initialState = []

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case FETCH_TODOS_SUCCESS:
      return [...state, ...action.payload]
    case FETCH_TODOS_FAILED:
      return action.payload
    default:
      return state
  }
}
