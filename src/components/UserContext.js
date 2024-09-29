import { createContext } from "react";
// to prevent from prop drilling 
const UserContext = createContext({
    loggedInUser : "Default User",
});

export default UserContext;