import PropTypes from "prop-types";

import styles from "../../styles/Comment.module.css";
import CustomButton from "../UI/CustomButton";

const CommentItem = ({ subComment }) => {
  return (
    <div className={`${styles.comment} ${subComment && styles.subcomment}`}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <p>pic here</p>
        </div>
        <div className={styles.userInfo}>
          <h2>Elijah Moss</h2>
          <p>@hexagon.bestagon</p>
        </div>

        <div className={styles.cta}>
          <CustomButton clear text="reply" />
        </div>
      </div>
      <div className={styles.body}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis iusto
          perspiciatis rem corrupti, obcaecati possimus fugit necessitatibus
          voluptatum vitae ratione?
        </p>
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
