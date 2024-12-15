import { Node, Handle, NodeProps, Position } from "@xyflow/react";
import { useCanvasStore } from "../../state/canvasStore";
import styles from "./FilterableNode.module.css";
import { NodeData } from "../../state/initialState";

export function FilterableNode({ id, data }: NodeProps<Node<NodeData>>) {
  const isSelected = useCanvasStore((state) => {
    return state.nodes.find(node => node.id === id)?.data.isSelected
  });

  return (
    <div className={`${styles.node} ${isSelected ? styles.selected : ''}`}>
      <Handle type="target" position={Position.Top} />
      <div>Node {data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
