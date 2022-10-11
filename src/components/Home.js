import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import AuthService from "../services/authService";
import TodoForm from "./todos/TodoForm";
import TodoList from "./todos/TodoList";

export default function Home() {

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const authService = new AuthService();

  async function checkToken() {
    authService.check()
      .then((res) => {
        setUser(res);
        setLoading(false);
      });
  }

  useEffect(() => {
    checkToken();
  });


  if (loading) {
    return <div>Loading...</div>;
  }

  return ( 
  <div>
    <h1>Welcome {user.username}</h1>
    <TodoForm/>
    <TodoList/> 
  </div>
  )
}