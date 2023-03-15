import { useEffect, useState } from "react";
import "./memoryGame.scss";

type TCard = {
  id: number;
  value: string;
};

export default function MemoryGame() {
  const TIMEOUT = 500;

  const VALUES = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];

  const shuffleValues = () => {
    const values = VALUES.concat(VALUES);
    values.sort(() => Math.random() - 0.5);

    return values;
  };

  const [values, setValues] = useState<string[]>(shuffleValues());
  const [flippedCardIds, setFlippedCardIds] = useState<number[]>([]);

  // Correctly guessed, will stay flipped
  const [guessedCardIds, setGuessedCardIds] = useState<number[]>([]);

  const handleFlipCard = (id: number) => {
    if (flippedCardIds.length === 2) return;
    if (guessedCardIds.includes(id)) return;

    setFlippedCardIds((prev) => [...prev, id]);
  };

  useAddToPair(flippedCardIds, values, setGuessedCardIds, setFlippedCardIds);
  const gameOver = useIsGameOver(guessedCardIds, values);

  const cardElements = values.map((val, i) => {
    const flipped = flippedCardIds.includes(i);

    if (guessedCardIds.includes(i)) {
      return (
        <div key={Math.random()} className="card">
          {val}
        </div>
      );
    }

    // Not already guessed
    else
      return (
        <div key={Math.random()} className={`card ${flipped ? "card-flipped" : ""}`} onClick={() => handleFlipCard(i)}>
          {flipped ? val : ""}
        </div>
      );
  });

  function restart() {
    setValues(shuffleValues());
    setFlippedCardIds([]);
    setGuessedCardIds([]);
  }

  console.log(gameOver);

  return (
    <div className="memory-game-wrapper" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.sqrt(values.length)}, 1fr)` }}>
      {cardElements}
      {gameOver ? <button onClick={restart}>Restart</button> : null}
    </div>
  );
}

function useIsGameOver(correctlyGuessedIds: number[], values: string[]) {
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (correctlyGuessedIds.length === values.length) setGameOver(true);
    else setGameOver(false);
  }, [correctlyGuessedIds, values]);

  return gameOver;
}

function useAddToPair(
  flippedCardIds: number[],
  values: string[],
  setGuessedCardIds: React.Dispatch<React.SetStateAction<number[]>>,
  setFlippedCardIds: React.Dispatch<React.SetStateAction<number[]>>
) {
  const TIMEOUT = 500;

  useEffect(() => {
    if (flippedCardIds.length !== 2) return;
    if (values[flippedCardIds[0]] === values[flippedCardIds[1]]) {
      setGuessedCardIds((prev) => [...prev, ...flippedCardIds]);
    }

    const handler = setTimeout(() => {
      setFlippedCardIds([]);
    }, TIMEOUT);

    return () => clearTimeout(handler);
  }, [flippedCardIds]);
}
