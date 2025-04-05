import { useState } from "react";
import PlayGame from "./components/PlayGame";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState();

  function toggleGamePlay() {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>{isGameStarted ? <PlayGame /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
