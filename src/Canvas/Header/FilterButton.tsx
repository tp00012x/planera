import { useState } from "react";
import styles from "./FilterButton.module.css";
import filterIcon from "../../assets/filter.svg";
import FilterWidget from "./FilterWidget";

export default function FilterButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <img src={filterIcon} className={styles.filterIcon}></img>
        Filter Button
      </button>
      {open ? <FilterWidget /> : null}
    </>
  );
}
