import { BaseEdge, getBezierPath, type EdgeProps } from "@xyflow/react";
import { useCanvasStore } from "../../state/canvasStore";

export default function CustomEdge(edgeProps: EdgeProps) {
  const nodes = useCanvasStore((store) => store.nodes)

  const { source: sourceNodeId, target: targetNodeId } = edgeProps;
  const [edgePath] = getBezierPath({ ...edgeProps });

  // TODO: Get filter status based on source and target nodes
  const sourceNode = nodes.find((node) => node.id === sourceNodeId)
  const targetNode = nodes.find((node) => node.id === targetNodeId)
  const isSelected = sourceNode?.data.isSelected && targetNode?.data.isSelected

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={"url('#1__type=arrowclosed')"}
        style={{ strokeWidth: 2, stroke:  isSelected ? 'red': 'black'}} // TODO: Change stroke based on filter status
      />
    </>
  );
}
