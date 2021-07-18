import { useContext, useEffect, useState } from "react";
import { SuggestionContext } from "../context/SuggestionsContext";
import Empty from "./Empty";
import SuggestionItem from "./templates/SuggestionItem";

const Suggestions = () => {
  const suggestions = useContext(SuggestionContext);
  const [suggestionList, setSuggestionList] = useState([]);

  useEffect(() => {
    setSuggestionList(suggestions.filteredSuggestions);
  }, [suggestions.filteredSuggestions]);

  return (
    <div style={suggestionStyles}>
      {suggestionList.length > 0 ? (
        suggestionList.map(suggestion => (
          <SuggestionItem key={suggestion.id} suggestion={suggestion} />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

const suggestionStyles = {
  marginTop: "4rem",
};

export default Suggestions;
