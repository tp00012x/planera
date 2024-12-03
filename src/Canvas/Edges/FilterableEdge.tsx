import { BaseEdge, getBezierPath, type EdgeProps } from "@xyflow/react";

export default function CustomEdge(edgeProps: EdgeProps) {
  const { source: sourceNodeId, target: targetNodeId } = edgeProps;
  const [edgePath] = getBezierPath({ ...edgeProps });

  // TODO: Get filter status based on source and target nodes

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={"url('#1__type=arrowclosed')"}
        style={{ strokeWidth: 2 }} // TODO: Change stroke based on filter status
      />
    </>
  );
}
