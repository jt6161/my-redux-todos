export const ADD_TODO = 'ADD_TODO'

export const addTodo = (newTodo) => {
  console.log('add todo action', newTodo)
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}
