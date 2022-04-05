import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Tell friends to learn react",
    "get them to tell 5 friends",
    "Start successful pyramid scheme"
  ]);

  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))};
    </div>
  );
}

export default App;
