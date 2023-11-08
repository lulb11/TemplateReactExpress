import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const Context = createContext();

export function ContextProvider({ children }) {
  const [state, setState] = useState(0);
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Attend un enfant React
};

export const useTheContext = () => useContext(Context);
