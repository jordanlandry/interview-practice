import programmingProblems from "../data/programmingProblems";
import Problem from "./Problem";
import "../components/style.css";

export default function ProblemSection() {
  const problemElements = programmingProblems.map((problem) => (
    <li key={problem.id}>
      <Problem {...problem} />
    </li>
  ));

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>{problemElements}</ul>
    </div>
  );
}
