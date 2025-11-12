import React, { createContext, useContext } from "react";

const UserContext = createContext({
  LoggedInUser: "Ugyen",
});

export default UserContext;
