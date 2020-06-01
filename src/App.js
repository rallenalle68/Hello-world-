import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import { log } from "util";


function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    db.collection('Todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().title))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
   
    db.collection('Todos').add({
      title: input,
    })

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
