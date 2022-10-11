import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/todoContext";
import TodoService from "../../services/todoService";


export default function TodoForm() {
  const initValues = {
    name: '',
    description: ''
  };
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initValues);
  const { addTodo } = useContext(TodoContext);
  
  const todoService = new TodoService();

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleChange(event) {
    setValues((prevValues) => ({
     ...prevValues,
      [event.target.name]: event.target.value 
    }));
  }

  function submit(e) {
    setLoading(true);
    e.preventDefault();
    todoService.create(values)
      .then(res => {
        setValues(initValues);
        setLoading(false);
        addTodo(res);
      });
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Title"
        name="name"
        value={values.name || ''}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        value={values.description || ''}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}