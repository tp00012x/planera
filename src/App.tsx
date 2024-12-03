import "./App.css";
import Canvas from "./Canvas/Canvas";
import CanvasHeader from "./Canvas/Header/CanvasHeader";

function App() {
  return (
    <>
      <div className={"container"}>
        <CanvasHeader />
        <Canvas />
      </div>
    </>
  );
}

export default App;
