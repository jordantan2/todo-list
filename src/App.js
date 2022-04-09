import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm"
import { useState } from "react";




function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Tell friends to learn react",
    "get them to tell 5 friends",
    "Start successful pyramid scheme"
  ]);


  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);

  };

  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
