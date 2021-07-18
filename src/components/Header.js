import { useState, useEffect, useContext } from "react";
import CustomButton from "../components/UI/CustomButton";
import Dropdown from "./UI/Dropdown";
import logo from "../assets/suggestions/icon-suggestions.svg";
import styles from "../styles/Header.module.css";
import { SuggestionContext } from "../context/SuggestionsContext";

const Header = () => {
  const suggestionTotal = useContext(SuggestionContext);

  const [suggestionCount, setSuggestionCount] = useState();

  useEffect(() => {
    setSuggestionCount(suggestionTotal.filteredSuggestions.length);
  }, [suggestionTotal.filteredSuggestions]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="suggestion lightbulb" />
      </div>
      <div className={styles.suggestionCount}>
        <p> {suggestionCount} suggestions</p>
      </div>
      <div className={styles.sortOptions}>
        <Dropdown />
      </div>
      <div className={styles.cta}>
        <CustomButton primary text="add feedback" />
      </div>
    </header>
  );
};

export default Header;
