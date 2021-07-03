import CustomButton from "../components/UI/CustomButton";
import Dropdown from "./UI/Dropdown";
import logo from "../assets/suggestions/icon-suggestions.svg";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="suggestion lightbulb" />
      </div>
      <div className={styles.suggestionCount}>
        <p>6 suggestions</p>
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
