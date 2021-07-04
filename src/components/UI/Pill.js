import styles from "../../styles/Pill.module.css";
import arrow from "../../assets/shared/icon-arrow-up.svg";
import PropTypes from "prop-types";

const Pill = ({ text, hasArrow, pillFunc }) => {
  return (
    <div className={styles.pill} onClick={pillFunc}>
      {hasArrow && <img src={arrow} alt="up arrow" />}
      <p>{text}</p>
    </div>
  );
};

Pill.proptype = {
  text: PropTypes.string.isRequired,
  hasArrow: PropTypes.bool.isRequired,
  pillFunc: PropTypes.func,
};

Pill.defaultProps = {
  text: "",
  hasArrow: false,
};

export default Pill;
