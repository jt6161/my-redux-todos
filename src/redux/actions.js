export const ADD_TODO = 'ADD_TODO'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED'

export const addTodo = (newTodo) => {
  console.log('add todo action', newTodo)
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: newTodo
    })
  }
}

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      let todos = await response.json()
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: todos
      })
    } catch(error) {
      dispatch({
        type: FETCH_TODOS_FAILED,
        payload: error
      })
    }
  }
}
