import { Edge, MarkerType, Node } from "@xyflow/react";

// DO NOT MODIFY
// Treat this state as if it came from a real api
const generateInitialState: () => MockedResponse = () => {
  const nodes: Node<NodeData>[] = [];
  const edges: Edge[] = [];

  for (let horizonalIndex = 0; horizonalIndex < 6000; horizonalIndex += 300) {
    for (let verticalIndex = 0; verticalIndex < 2000; verticalIndex += 100) {
      nodes.push({
        id: `${horizonalIndex}-${verticalIndex}`,
        type: "filterable",
        position: { x: horizonalIndex, y: verticalIndex },
        data: { label: `${horizonalIndex}:${verticalIndex}` },
      });
    }
  }

  for (let horizonalIndex = 0; horizonalIndex < 6000; horizonalIndex += 300) {
    for (let verticalIndex = 0; verticalIndex < 1900; verticalIndex += 100) {
      edges.push({
        id: `${horizonalIndex}-${verticalIndex}`,
        source: `${horizonalIndex}-${verticalIndex}`,
        target: `${horizonalIndex}-${verticalIndex + 100}`,
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
        style: {
          strokeWidth: 2,
        },
      });
    }
  }

  return { nodes, edges };
};

export type NodeData = {
  label: string;
};

type MockedResponse = {
  nodes: Node<NodeData>[];
  edges: Edge[];
};
export const fetchCanvasState = () =>
  new Promise<MockedResponse>((resolve) => {
    resolve(generateInitialState());
  });
