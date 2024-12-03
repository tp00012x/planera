import { Background, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect } from "react";
import { fetchCanvasState } from "../state/initialState";
import { useCanvasStore } from "../state/canvasStore";
import { FilterableNode } from "./Nodes/FilterableNode";
import FilterableEdge from "./Edges/FilterableEdge";
import styles from "./Canvas.module.css";

const nodeTypes = {
  filterable: FilterableNode,
};
const edgeTypes = {
  default: FilterableEdge,
};

export default function Canvas() {
  useEffect(() => {
    // Fetch initial state and set it in the store
    const storeApi = useCanvasStore;
    const setNodes = storeApi.getState().setNodes;
    const setEdges = storeApi.getState().setEdges;

    // Mock network request
    fetchCanvasState().then(({ nodes, edges }) => {
      setNodes(nodes);
      setEdges(edges);
    });
  }, []);

  // Get live state from canvas store
  const nodes = useCanvasStore((state) => state.nodes);
  const edges = useCanvasStore((state) => state.edges);
  // Updates node/edge states to support drag and connect (not relevant to challenge)
  const onNodesChange = useCanvasStore((state) => state.onNodesChange);
  const onEdgesChange = useCanvasStore((state) => state.onEdgesChange);
  const onConnect = useCanvasStore((state) => state.onConnect);

  return (
    <div className={styles.canvas}>
      <ReactFlow
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{
          hideAttribution: true,
        }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
