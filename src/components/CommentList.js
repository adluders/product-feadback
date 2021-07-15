import CommentItem from "./templates/CommentItem";
import styles from "../styles/CommentList.module.css";

const CommentList = () => {
  return (
    <section className={styles.commentList}>
      <div className="header">
        <h2>2 comments</h2>
      </div>
      <CommentItem />
      <CommentItem subComment />
    </section>
  );
};

export default CommentList;
