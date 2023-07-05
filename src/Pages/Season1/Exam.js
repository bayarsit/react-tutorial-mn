import { TodoList } from "./ExamFiles/TodoList";

export const Exam = () => {
  return (
    <div className="App-lesson">
      <div>
        <h3>Season 1 : Exam</h3>
      </div>
      <p> Task: create app to-do list. completion time: 1 hour</p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ textAlign: "left" }} className="no-border">
          <li>Components: TodoList, TodoItem</li>
          <li>Add button - add task to the list</li>
          <li>Delete button - remove task from the list</li>
          <li>
            Requirements:
            <div className="no-border" style={{ paddingLeft: 40 }}>
              <li>Props - pass data, pass function</li>
              <li>State management</li>
              <li>Event handling</li>
              <li>Styling with basic CSS.</li>
            </div>
          </li>
        </div>
      </div>
      <TodoList />
    </div>
  );
};
