import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
  const todoItems = todos
    ? todos.map(todo => <TodoItem key={todo.title} todo={todo} />)
    : '';
  return (
    <div className="Todos">
      <h3>Todo List</h3>
      {todoItems}
    </div>
  );
};

export default Todos;
