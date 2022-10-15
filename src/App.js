import "./App.css";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(null);
  const userData = {
    ctoken: [token, setToken],
    clogged: [logged, setLogged],
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">{userData.clogged[0] ? <Welcome /> : <Form />}</div>
    </UserContext.Provider>
  );
}
export default App;

// const { logged } = useContext(UserContext);

// useEffect(()  => {
//   // checkear si existe un token en el localStorage
//   // si no existe, mostrar formulario de login
//   // checkear si ese token es valido (endpoint check)
//   // si es valido, setear logged a true
//   // si no es valido, eliminar token de localStorage mostrar formulario de login

// });
