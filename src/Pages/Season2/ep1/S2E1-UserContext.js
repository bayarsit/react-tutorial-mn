import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "Mario", age: 40 });
  const [user1, setUser1] = useState({ name: "Mario", age: 40 });

  return (
    <UserContext.Provider value={{ user, setUser, user1, setUser1 }}>
      {children}
    </UserContext.Provider>
  );
}
