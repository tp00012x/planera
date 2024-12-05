# Planera Coding Challenge

This repository contains the planera coding challenge

## Requirements

- Node v20

## Startup

1. npm install
2. npm run dev

## Notes on Third Party Libraries

### Zustand

In this repository we are using zustand for state management. When fetching state there are two recommended approaches:

1. Selectors

- Recommended when subscribing components to partial state of the store

```
const nodes = useCanvasStore((state) => state.nodes)
```

2. Lookups

- Recommended when fetching current state during a callback

```
const nodes = useCanvasStore.getState().nodes
```

When setting state there are two recommended approaches

1. Setter function in the store

- Recommended when state will be set often as it is reusable.

```
const setNodes = useCanvasStore((state) => state.setNodes)
```

2. Onetime sets

- Not recommended generally, but useful for infrequent state updates

```
const updatedNodes = ...
useCanvasStore.setState({nodes: updatedNodes })
```

### React Flow (XY-Flow)

Detailed understanding of React Flow should not be necessary for this coding challenge. All the necessary setup has been done for you. Nodes and edges are regular react components with two important props:

1. ID: the id of the node

2. Data: Additional typed data. Type is defined in `initialState.ts`

## Coding Challenge

You are being asked to create a filter widget for the canvas. It should leverage the built-in string search function to match the labels of nodes. When the filter condition is met, nodes should change color to indicate filtered-out status. The ideal solution will take into account performance both in react renders and overall time complexity.

Phase 1:

- Filter widget should have an input field for users to specify a string search
- Filter condition should match node labels based on built-in string match https://www.w3schools.com/jsref/jsref_match.asp
- Nodes should change from blue to pink only when the filter condition is met

Phase 2:

- Edges should turn red when only when both source and target node match the filter

Phase 3 (Bonus):

- Improve performance (if necessary)
- Improve style of filter widget
