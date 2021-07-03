import { useState } from "react";
import styles from "../../styles/Dropdown.module.css";

const Dropdown = () => {
  const [selected, setSelected] = useState("Most Upvotes");
  const [showOptions, setShowOptions] = useState(false);

  const updateSelected = e => {
    setSelected(e.target.innerText);
    setShowOptions(false);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setShowOptions(!showOptions)}
      >
        <p>Sort by: {selected} </p>
      </div>

      {showOptions && (
        <div className={styles.dropdownOptions}>
          <p onClick={updateSelected}>Most Upvotes</p>
          <p onClick={updateSelected}>Least Upvotes</p>
          <p onClick={updateSelected}>Most Comments</p>
          <p onClick={updateSelected}>Least Comments</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
