import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const Context = createContext();

export function ContextProvider({ children }) {
  const [state, setState] = useState(0);
  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/`)
      .then(({ data }) => {
        console.log(data);
        setGetUser(data[0]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des films:", error);
      });
  }, []);

  return (
    <Context.Provider value={{ state, setState, getUser }}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Attend un enfant React
};

export const useTheContext = () => useContext(Context);
