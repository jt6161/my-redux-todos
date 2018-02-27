import { ADD_TODO } from './actions';

let initialState = ['one', 'two']

export default (state = initialState, action) => {
  console.log('state in reducer', state)
  console.log('action in reducer', action)
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload)
    default:
      return state
  }
}
