import PropTypes from "prop-types";

import styles from "../../styles/Comment.module.css";
import CustomButton from "../UI/CustomButton";

const CommentItem = ({ subComment, commentInfo }) => {
  const { content, user } = commentInfo;

  return (
    <div className={`${styles.comment} ${subComment && styles.subcomment}`}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <p>pic here</p>
        </div>
        <div className={styles.userInfo}>
          <h2> {user.name} </h2>
          <p> {user.username} </p>
        </div>

        <div className={styles.cta}>
          <CustomButton clear text="reply" />
        </div>
      </div>
      <div className={styles.body}>
        <p> {content} </p>
      </div>
    </div>
  );
};

CommentItem.proptype = {
  subComment: PropTypes.bool.isRequired,
};

CommentItem.defaultProps = {
  subComment: false,
};

export default CommentItem;
