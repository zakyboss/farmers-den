import { createContext, useContext, useReducer } from "react";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true };
  }
}
const UserContext = createContext();
export default function UsersContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isAuthenticated, isLoading } = state;
  return (
    <UserContext.Provider value={(isAuthenticated, isLoading, dispatch)}>
      {children}
    </UserContext.Provider>
  );
}
function useUserContext() {
  const context = useContext(UserContext);
  return context;
}

export { UsersContext, useUserContext };
