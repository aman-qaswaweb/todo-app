import AppName from "./componenets/AppName";
import AddTodo from "./componenets/AddTodo";
import TodoItem from "./componenets/TodoItem1";
import TodoItem2 from "./componenets/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
      <TodoItem />
      <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
