import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = (props) => {
  console.log('props in tl', props)
  let listOfTodos = props.todos.map(todo => {
    return (
      <Todo key={todo} todo={todo} />
    )
  })
  return (
    <ul>{listOfTodos}</ul>
  )
}

function mapStateToProps(storeState) {
  return {
    todos: storeState.todos
  }
}

export default connect(mapStateToProps, null)(TodoList)
