import styles from "./CanvasHeader.module.css";
import FilterButton from "./FilterButton";
import logo from "../../assets/planera-logo.svg";

export default function CanvasHeader() {
  return (
    <div className={styles.header}>
      <img src={logo}></img>
      <h1>Planera Canvas</h1>
      <FilterButton />
    </div>
  );
}
