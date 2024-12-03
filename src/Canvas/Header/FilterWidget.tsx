import styles from "./FilterWidget.module.css";

export default function FilterWidget() {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // TODO: Handle onChange when user types
  };

  return (
    <div
      className={styles.container}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <h2>Filter Widget</h2>
      <input type="text" onChange={onChange} />
    </div>
  );
}
