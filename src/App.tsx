import { DisplayTreeSection } from "./components/practicalProblems/displayTree/DisplayTreeSection";
import MemoryGame from "./components/practicalProblems/memoryGame/MemoryGame";
import ProblemSection from "./components/ProblemSection";

function App() {
  return (
    <div className="App">
      <DisplayTreeSection />
      <ProblemSection />

      {/* <MemoryGame /> */}
    </div>
  );
}

export default App;
