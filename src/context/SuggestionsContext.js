import { createContext, useState, useEffect } from "react";
import { data } from "../data.js";

export const SuggestionContext = createContext();

const SuggestionContextProvider = ({ children }) => {
  const [suggestions] = useState(data);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const filterSuggestions = filterItem => {
    if (filterItem.toLowerCase() === "all") {
      setFilteredSuggestions(suggestions[0].productRequests);
    } else {
      setFilteredSuggestions(
        suggestions[0].productRequests.filter(
          prod => prod.category === filterItem
        )
      );
    }
  };

  useEffect(() => {
    setFilteredSuggestions(suggestions[0].productRequests);
  }, [suggestions]);

  return (
    <SuggestionContext.Provider
      value={{ filteredSuggestions, filterSuggestions }}
    >
      {children}
    </SuggestionContext.Provider>
  );
};

export default SuggestionContextProvider;
