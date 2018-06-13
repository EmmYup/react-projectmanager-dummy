import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    const todoItems = this.props.todos
      ? this.props.todos.map(todo => <TodoItem key={todo.title} todo={todo} />)
      : '';
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

export default Todos;
