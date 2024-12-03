import { Node, Handle, NodeProps, Position } from "@xyflow/react";
import { useCanvasStore } from "../../state/canvasStore";
import styles from "./FilterableNode.module.css";
import { NodeData } from "../../state/initialState";

export function FilterableNode({ id, data }: NodeProps<Node<NodeData>>) {
  const isFiltered = useCanvasStore((state) => {
    // TODO: decide if node is filtered
    false;
  });

  return (
    <div className={`${styles.node}`}>
      <Handle type="target" position={Position.Top} />
      <div>Node {data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
