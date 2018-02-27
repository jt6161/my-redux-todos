import React, { Component } from 'react'
import { addTodo } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from './TodoList';

class TodoInput extends Component {
  state = {
    newTodo: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo({
      id: this.props.newId,
      title: this.state.newTodo
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          New todo here:
          <input
            type="text"
            onChange={e => this.setState({newTodo: e.target.value})}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: bindActionCreators(addTodo, dispatch)
  }
}
 function mapStateToProps(state) {
   console.log(state.todos.length)
   return {
     newId: state.todos.length + 1
   }
 }



export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)
