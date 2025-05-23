import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'todo 1', assignee: 'Assignee 1', percentage: 10 },
    { id: 2, text: 'todo 2', assignee: 'Assignee 2', percentage: 20 },
    { id: 3, text: 'todo 3', assignee: 'Assignee 3', percentage: 100 },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: 'New Task',
      assignee: 'Unassigned',
      percentage: 0,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App-lesson">
      <div>
        <h4>Todo List: </h4>
      </div>
      <p> Task: create app to-do list.</p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ textAlign: "left" }} className="no-border">
          <div className="no-border">
            <button onClick={addTodo}>Add</button>
          </div>
          <ul> {/* Changed from div to ul for semantic list */}
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
