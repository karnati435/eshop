import { createContext, useReducer, useContext} from "react";

// Create the context
export const StateContext = createContext();

// StateProvider component
export const StateProvider = ({ initialState, reducer, children }) => {
  // Use useReducer to manage the state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access the state
export const UseStateValue = () => useContext(StateContext);
