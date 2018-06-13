import React from 'react';

const TodoItem = ({ todo }) => (
  <li className="Todo">
    <strong>{todo.title}</strong>
  </li>
);
export default TodoItem;
