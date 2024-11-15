import { createContext, useReducer, useContext } from "react";

// Create the context
export const StateContext = createContext();

// StateProvider component
export  const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access the state
export  const UseStateValue = () => useContext(StateContext);
console.log(UseStateValue)