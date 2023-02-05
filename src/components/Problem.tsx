import { ProgrammingProblemType } from "../data/programmingProblems";

export default function Problem({
  id,
  title,
  description,
  difficulty,
  leetCodeLink,
  solutionExplanation,
  practicing,
  optimalTime,
  optimalSpace,
}: ProgrammingProblemType) {
  const practicingElements = practicing.map((practice, i) => <li key={i}>{practice}</li>);

  return (
    <div
      style={{
        margin: "2rem auto",
        display: "block",
        maxWidth: "75%",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        padding: "1rem",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <p style={{ color: difficulty === "Easy" ? "#55dd55" : difficulty === "Medium" ? "#ffaa00" : "#dd5555" }}>
        {difficulty}
      </p>
      <p>Explanation: {solutionExplanation}</p>
      <a href={leetCodeLink} rel="noreferrer" target="_blank">
        LeetCode Link
      </a>
      <ul style={{ padding: 0, listStyle: "none", display: "flex", gap: "16px" }}>{practicingElements}</ul>
      <div style={{ display: "flex", gap: "16px" }}>
        <p>Time Complexity: {optimalTime}</p>
        <p>Space Complexity: {optimalSpace}</p>
      </div>
    </div>
  );
}
