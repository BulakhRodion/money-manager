import {createContext, useReducer, useEffect} from "react";
import ThemeReducer from "./ThemeReducer";

const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem('theme')) || false,
};

export const ThemeContext = createContext(INITIAL_STATE);

export const ThemeContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
};