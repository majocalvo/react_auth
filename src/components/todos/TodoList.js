import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../contexts/todoContext";
import TodoService from "../../services/todoService";


export default function TodoList() {

  const [loading, setLoading] = useState(true);
  const { todos, setTodos, removeTodo } = useContext(TodoContext);
  const todoService = new TodoService();

  async function getTodos() {
    const todoList = await todoService.getAll();
    console.log(todoList);
    setTodos(todoList);
    setLoading(false);
  }

  useEffect(() => {
    getTodos();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  function handleDeleteCLick(id) {
    todoService.deleteById(id)
      .then(() => {
        removeTodo(id);
      });
  }

  return (
    <div>
      <h2>Acá están tus tareas 🤵🏽‍♂️</h2>
      <div>
        {
          todos.map(todo => {
            return <div key={todo.id}>
              <p> - {todo.id} {todo.name}</p>
              <span>{todo.description}</span>
              <button onClick={() => {handleDeleteCLick(todo.id)}}> eliminar </button>
            </div>
          })
        }
      </div>
    </div>
  );
}