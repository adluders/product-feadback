import CustomButton from "./UI/CustomButton";
import styles from "../styles/AddComment.module.css";

const AddComment = () => {
  return (
    <section className={styles.addcomment}>
      <div className={styles.header}>
        <h2>Add Comment</h2>
      </div>
      <textarea
        rows="5"
        placeholder="Type your comment here"
        className={styles.text}
      ></textarea>
      <div className={styles.footer}>
        <p>250 Characters left</p>
        <CustomButton primary text="post comment" />
      </div>
    </section>
  );
};

export default AddComment;
