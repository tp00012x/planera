import styles from "./FilterWidget.module.css";

import { useCanvasStore } from "../../state/canvasStore";


export default function FilterWidget() {


  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {



    // TODO: Handle onChange when user types
    const nodeCopy = [...useCanvasStore.getState().nodes]

    for (const node of nodeCopy) {
      if (event.target.value && node.data.label.match(event.target.value)) {
        node.data.isSelected = true
      } else {
        node.data.isSelected = false
      }
    }

    useCanvasStore.setState({
      nodes: nodeCopy
    })
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
