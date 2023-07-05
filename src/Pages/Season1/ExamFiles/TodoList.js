export const TodoList = () => {
  return (
    <div className="App-lesson">
      <div>
        <h4>Todo List: </h4>
      </div>
      <p> Task: create app to-do list.</p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ textAlign: "left" }} className="no-border">
          <div className="no-border">
            <button>Add</button>
          </div>
          <li>
            todo 1 | Assignee 1 | 10% <button>x</button>
          </li>
          <li>
            todo 2 | Assignee 2 | 20% <button>x</button>
          </li>
          <li>
            todo 3 | Assignee 3 | 100% <button>x</button>
          </li>
        </div>
      </div>
    </div>
  );
};
