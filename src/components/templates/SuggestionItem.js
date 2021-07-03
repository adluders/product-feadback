import Pill from "../UI/Pill";
import styles from "../../styles/SuggestionItem.module.css";

import chatbubble from "../../assets/shared/icon-comments.svg";

const SuggestionItem = () => {
  return (
    <section className={styles.selectionItem}>
      <Pill text="112" hasArrow />
      <div className={styles.content}>
        <h2>Add tags for solutions</h2>
        <p>Easier to search for solutions</p>
        <Pill text="enhancement" />
      </div>
      <div className={styles.comment}>
        <img src={chatbubble} alt="chat bubble" />
        <p>2</p>
      </div>
    </section>
  );
};

export default SuggestionItem;
