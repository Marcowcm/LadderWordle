import { Cell } from "./Cell";
import { getStatus } from "../gameLogics";

type Props = {
  solution: string;
  guess: string;
};

export const UsedRow = ({ solution, guess }: Props) => {
  const letters = Array.from(guess.toUpperCase().split(""));
  const statuses = getStatus(solution, guess);
  return (
    <div className="mb-1 row justify-center">
      {letters.map((letter, i) => (
        <Cell status={statuses[i]} value={letter} key={i} />
      ))}
    </div>
  );
};
