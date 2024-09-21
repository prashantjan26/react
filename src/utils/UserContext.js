import { createContext, useContext } from "react";

const UserContext = createContext({
  loggedInUser: "Prashant",
});

export default UserContext;
