import styles from "../../styles/CustomButton.module.css";
import backArrow from "../../assets/shared/icon-arrow-left.svg";
import PropTypes from "prop-types";

const CustomButton = ({ secondary, primary, dark, danger, text, hasArrow }) => {
  return (
    <button
      className={
        (secondary && styles.secondary) ||
        (primary && styles.primary) ||
        (dark && styles.dark) ||
        (danger && styles.danger)
      }
    >
      {hasArrow && <img src={backArrow} alt="back arrow" />}
      {text}
    </button>
  );
};

CustomButton.proptype = {
  secondary: PropTypes.bool.isRequired,
  primary: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  light: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  hasArrow: PropTypes.bool.isRequired,
};

CustomButton.defaultProps = {
  secondary: false,
  primary: false,
  dark: false,
  light: false,
  hasArrow: false,
  text: "",
};

export default CustomButton;
