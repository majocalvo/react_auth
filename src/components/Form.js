import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import AuthService from "../services/authService";

export const Form = () => {

  const [values, setValues] = useState({
    email: "jose@larnu.com",
    discordId: "310544245155168256"
  });

  const authService = new AuthService();
  const { setLogged } = useContext(UserContext); 


  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }));
  }

  function submit(e) {
    e.preventDefault();
    authService.login(values)
      .then(res => {
        setLogged(true);
      });
  }

  return (
    <form className='form' onSubmit={submit}>
      <div>
        <label>email</label>
        <input 
          type="email"
          name='email'
          value={values.email || ''}
          onChange={handleChange}
          placeholder='email'
          required
        />
      </div>
      <div>
        <label>discordId</label>
        <input 
          type="text"
          name='discordId'
          value={values.discordId || ''}
          onChange={handleChange}
          placeholder='Discord Id'
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}