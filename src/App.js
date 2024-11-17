import TodoList from "./TodoList";
import { useState, useRef, useEffect } from "react";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    if (todo) {
      todo.complete = !todo.complete;
      setTodos(newTodos);
    }
  }

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: Date.now(), name: name, complete: false }];
    });
    todoNameRef.current.value = '';
  }

  function handleClearTodos() {
    setTodos([]);
  }

  const todosLeft = todos.filter(todo => !todo.complete).length;

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" placeholder="Enter Todo" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear List</button>
      <div>{todos.filter(todo=> !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
