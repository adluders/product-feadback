import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { SuggestionContext } from "../context/SuggestionsContext";

import CommentList from "../components/CommentList";
import FeedbackHeader from "../components/FeedbackHeader";
import SuggestionItem from "../components/templates/SuggestionItem";
// import AddComment from "../components/AddComment";

const Detail = () => {
  const { filteredSuggestions } = useContext(SuggestionContext);

  const { info } = useParams();

  const [suggestionItem, setSuggestionItem] = useState();

  // const [comments, setComments] = useState()

  useEffect(() => {
    const itemToShow = filteredSuggestions.filter(
      suggestion =>
        suggestion.title
          .toLowerCase()
          .split("/")
          .join("_")
          .split(" ")
          .join("_") === info
    );

    setSuggestionItem(itemToShow[0]);
  }, [filteredSuggestions, info]);

  return (
    <main style={{ maxWidth: "78%", margin: "3rem auto" }}>
      <FeedbackHeader />
      <SuggestionItem suggestion={suggestionItem} />
      <CommentList comments={suggestionItem && suggestionItem.comments} />

      {/**
      
      <AddComment />
    */}
    </main>
  );
};

export default Detail;
