import { useMemo } from "react";
import ReactFlow, {
    Background,
    MarkerType,
    ReactFlowProvider
} from "reactflow";
import "reactflow/dist/style.css";

/* ---------------- NODE STYLE ---------------- */

const baseNodeStyle = {
  background: "#020617",
  color: "white",
  borderRadius: "14px",
  padding: "14px 18px",
  fontWeight: 600,
  fontSize: "14px"
};

const createNode = (id, label, x, y, color, visible) => ({
  id,
  position: { x, y },
  data: { label },
  hidden: !visible,
  style: {
    ...baseNodeStyle,
    border: `2px solid ${color}`,
    boxShadow: `0 0 18px ${color}40`
  }
});

/* ---------------- EDGE STYLE ---------------- */

const edge = (source, target) => ({
  id: `${source}-${target}`,
  source,
  target,
  animated: true,
  style: {
    stroke: "#38bdf8",
    strokeWidth: 2,
    filter: "drop-shadow(0 0 3px #38bdf8)"
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#38bdf8"
  }
});

/* ---------------- COMPONENT ---------------- */

export default function ArchitectureFlow({ step }) {
  const nodes = useMemo(
    () => [
      createNode("user", "User", 400, 0, "#6366f1", step >= 1),
      createNode("frontend", "Frontend", 400, 150, "#22c55e", step >= 2),
      createNode("backend", "Backend Orchestrator", 400, 300, "#f97316", step >= 3),
      createNode("ai", "AI Engine", 400, 470, "#ec4899", step >= 4),
      createNode("github", "GitHub API", 200, 650, "#0ea5e9", step >= 5),
      createNode("db", "Database", 600, 650, "#a855f7", step >= 6)
    ],
    [step]
  );

  const edges = [
    edge("user", "frontend"),
    edge("frontend", "backend"),
    edge("backend", "ai"),
    edge("backend", "github"),
    edge("backend", "db")
  ];

  return (
        <div
        className="relative w-full"
        style={{ height: "720px", minHeight: "720px" }}
        >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          style={{ width: "100%", height: "100%" }}

          /* DISABLE PLAYGROUND FEATURES */
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
        >
          <Background color="#1e293b" gap={24} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
