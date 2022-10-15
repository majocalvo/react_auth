import { createContext } from "react";

const UserContext = createContext({
  ctoken: [null, () => {}], //definir propiedad token:
  clogged: [false, () => {}],
});

export default UserContext;
