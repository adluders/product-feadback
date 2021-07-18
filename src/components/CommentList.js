import PropTypes from "prop-types";

import CommentItem from "./templates/CommentItem";
import styles from "../styles/CommentList.module.css";

const CommentList = ({ comments }) => {
  return (
    <section className={styles.commentList}>
      <div className="header">
        <h2> [figure this out] comments</h2>
      </div>
      {comments &&
        comments.map(comment => (
          <CommentItem key={comment.id} commentInfo={comment} />
        ))}
      {/**
         *      <CommentItem />
      <CommentItem subComment /> 
         */}
    </section>
  );
};

CommentItem.proptype = {
  comments: PropTypes.array.isRequired,
};

CommentItem.defaultProps = {
  comments: [],
};

export default CommentList;
