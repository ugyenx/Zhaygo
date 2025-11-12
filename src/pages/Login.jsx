import React from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Login = () => {
  const { LoggedInUser, setuserName } = useContext(UserContext);
  return (
    <div>
      <label className="mr-4">Username</label>
      <input
        className="border-2 border-slate-800/50 p-1 "
        value={LoggedInUser}
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
