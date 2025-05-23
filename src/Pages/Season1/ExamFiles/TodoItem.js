import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{todo.text}</h3>
      <p>Assignee: {todo.assignee}</p>
      <p>Percentage: {todo.percentage}%</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
