import { createContext, useState } from "react";
import { data } from "../data.js";

export const SuggestionContext = createContext();

const SuggestionContextProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState(data);

  return (
    <SuggestionContext.Provider value={{ suggestions, setSuggestions }}>
      {children}
    </SuggestionContext.Provider>
  );
};

export default SuggestionContextProvider;
