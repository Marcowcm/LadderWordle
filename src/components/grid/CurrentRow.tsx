import { Cell } from "./Cell";

type Props = {
  solution: string;
  guess: string;
};

export const CurrentRow = ({ solution, guess }: Props) => {
  const letters = Array.from(guess.toUpperCase().split(""));
  const empties = Array.from(Array(solution.length - guess.length));

  return (
    <div className="mb-1 row flex justify-center">
      {letters.map((letter, i) => (
        <Cell value={letter} key={i} />
      ))}
      {empties.map((i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};
