import { Link } from "react-router-dom";
import CustomButton from "./UI/CustomButton";
import styles from "../styles/FeedbackHeader.module.css";

const FeedbackHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <CustomButton clear hasArrow text="go back" />
      </Link>
      <CustomButton secondary text="edit feedback" />
    </div>
  );
};

export default FeedbackHeader;
