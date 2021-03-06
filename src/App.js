import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm"
import { useState } from "react";
import "./App.css"


function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false},
    { text: "Meet friends for lunch", isCompleted: false},
    { text: "Pick Jim up from airport", isCompleted: false},
  ]);


  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);

  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem 
          todo={todo} 
          key={index}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
