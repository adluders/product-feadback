import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Pill from "../UI/Pill";
import styles from "../../styles/SuggestionItem.module.css";

import chatbubble from "../../assets/shared/icon-comments.svg";

const SuggestionItem = ({ suggestion }) => {
  const { title, category, upvotes, description, comments } = suggestion;

  const [voteTotal, setVoteTotal] = useState(0);

  useEffect(() => {
    setVoteTotal(upvotes);
  }, [upvotes]);

  const addToVote = () => setVoteTotal(voteTotal + 1);

  return (
    <section className={styles.suggestion}>
      <Pill pillFunc={addToVote} text={voteTotal} hasArrow />
      <Link
        className={styles.linkItem}
        to={`/suggestion/${
          title && title.toLowerCase().split("/").join("_").split(" ").join("_")
        }`}
      >
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.comment}>
          <img src={chatbubble} alt="chat bubble" />
          <p> {comments && comments.length} </p>
        </div>
        <Pill text={category} />
      </Link>
    </section>
  );
};

SuggestionItem.proptype = {
  suggestion: PropTypes.object.isRequired,
};

SuggestionItem.defaultProps = {
  suggestion: {},
};

export default SuggestionItem;
