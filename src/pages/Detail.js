import CommentList from "../components/CommentList";
import FeedbackHeader from "../components/FeedbackHeader";
import SuggestionItem from "../components/templates/SuggestionItem";
import AddComment from "../components/AddComment";

const Detail = () => {
  return (
    <main>
      <FeedbackHeader />
      <SuggestionItem />
      <CommentList />
      <AddComment />

      {/**Feedback Header */}
      {/**Suggestion Item */}
      {/**Comments Group */}
      {/**Comments Item for each reply */}
      {/**New Comment Field */}
    </main>
  );
};

export default Detail;
