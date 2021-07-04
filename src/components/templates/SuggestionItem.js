import { useState } from "react";
import { Link } from "react-router-dom";

import Pill from "../UI/Pill";
import styles from "../../styles/SuggestionItem.module.css";

import chatbubble from "../../assets/shared/icon-comments.svg";

const SuggestionItem = () => {
  const item = {
    id: 0,
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack",
    comments: [
      {
        id: 1,
        content: "Awesome idea!",
        user: {
          image: "./assets/user-images/image-suzanne.jpg",
          name: "Suzanne",
          username: "upbeat1811",
        },
      },
      {
        id: 2,
        content: "Use for fun!",
        user: {
          image: "./assets/user-images/image-thomas.jpg",
          name: "Thomas",
          username: "brawnybrave",
        },
      },
    ],
  };

  const { title, category, upvotes, description, comments } = item;

  const [voteTotal, setVoteTotal] = useState(upvotes);

  const addToVote = () => setVoteTotal(voteTotal + 1);

  return (
    <section className={styles.suggestion}>
      <Pill pillFunc={addToVote} text={voteTotal} hasArrow />
      <Link
        className={styles.linkItem}
        to={`/detail/${title.toLowerCase().split(" ").join("_")}`}
      >
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.comment}>
          <img src={chatbubble} alt="chat bubble" />
          <p> {comments.length} </p>
        </div>
        <Pill text={category} />
      </Link>
    </section>
  );
};

export default SuggestionItem;
