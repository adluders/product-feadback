import styles from "../styles/Empty.module.css";
import graphic from "../assets/suggestions/illustration-empty.svg";
import CustomButton from "./UI/CustomButton";

const Empty = () => {
  return (
    <div className={styles.empty}>
      <img src={graphic} alt="person with hat and maginifying glass" />
      <h2 className={styles.header}>There is no feedback yet.</h2>
      <p className={styles.text}>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <CustomButton primary text="add feedback" />
    </div>
  );
};

export default Empty;
