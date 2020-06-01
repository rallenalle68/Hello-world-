import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input])
    setInput("")

  };

  return (
    <div className="App">
      <h1>To do app</h1>

      <form>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />

      <button disabled={!input} type="submit" onClick={addTodo}>Add Todo</button>

      </form>
      
    
     {todos.map((todo) => (
       <Todo title={todo} /> ))}
    
    </div>
  );
}

export default App;
