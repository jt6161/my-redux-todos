import { createStore, combineReducers, applyMiddleware } from 'redux'
import todosReducer from './todos.reducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  todos: todosReducer
})

export default () => {
  return createStore(rootReducer, applyMiddleware(logger))

}
