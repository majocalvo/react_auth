import { createContext, useState } from "react";


export const UserContext = createContext();

function UserContextProvider({children}) {

  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      logged,
      setLogged
    }}>
      {children}
    </UserContext.Provider>

  );
}

export default UserContextProvider;