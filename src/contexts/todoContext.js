import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoContextProvider({children}) {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }

  function removeTodo(id) {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  function updateTodo(id, todo) {
    setTodos((prevTodos) => prevTodos.map(t => t.id === id ? todo : t));
  }

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
      updateTodo,
      setTodos
    }}>
      {children}
    </TodoContext.Provider>

  );
}

export default TodoContextProvider;