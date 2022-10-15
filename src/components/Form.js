import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import Url from "../conection/Url";

function Form() {
  const context = useContext(UserContext);
  const { ctoken, clogged } = context;
  const [token, setToken] = ctoken;
  const [logged, setLogged] = clogged;

  const [values, setValues] = useState({
    email: "jose@larnu.com",
    discordId: "310544245155168256",
  });

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  function login() {
    axios
      .post(`${Url}/auth/login`, values)
      .then((res) => res.data.token)
      .then((token) => {
        setToken(token);
        setLogged(true);
        console.log(clogged);
      });
  }

  function submit(e) {
    e.preventDefault();
    login();
  }

  return (
    <form className="form" onSubmit={submit}>
      <div>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          placeholder="email"
          required
        />
      </div>
      <div>
        <label>discordId</label>
        <input
          type="text"
          name="discordId"
          value={values.discordId || ""}
          onChange={handleChange}
          placeholder="Discord Id"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
export default Form;
