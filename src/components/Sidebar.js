import { useContext } from "react";
import { Link } from "react-router-dom";
import { SuggestionContext } from "../context/SuggestionsContext";
import styles from "../styles/Sidebar.module.css";
import Pill from "./UI/Pill";

const Sidebar = () => {
  const pillOptions = ["all", "UI", "UX", "enhancement", "bug", "feature"];
  const { filterSuggestions } = useContext(SuggestionContext);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.content}>
        <div className={styles.pageTitle}>
          <h1>Frontend Mentor</h1>
          <p>Feedback Board</p>
        </div>

        <div className={styles.filters}>
          {pillOptions.map((pillOption, inx) => (
            <Pill
              pillFunc={() => filterSuggestions(pillOption)}
              key={inx}
              text={pillOption}
            />
          ))}
        </div>

        <div className={styles.roadmap}>
          <h4 className={styles.roadmapTitle}>
            Roadmap
            <Link to="/roadmap">View </Link>
          </h4>
          <p className={styles.roadmapItem}>
            <span className={styles.roadmapItemColor}></span>
            Planned
            <span className={styles.roadmapItemCount}>2</span>
          </p>
          <p className={styles.roadmapItem}>
            <span className={styles.roadmapItemColor}></span>
            In-Progress
            <span className={styles.roadmapItemCount}>2</span>
          </p>
          <p className={styles.roadmapItem}>
            <span className={styles.roadmapItemColor}></span>
            Live
            <span className={styles.roadmapItemCount}>2</span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
