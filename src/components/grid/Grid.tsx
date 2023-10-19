import { EmptyRow } from "./EmptyRow";
import { UsedRow } from "./UsedRow";
import { CurrentRow } from "./CurrentRow";

type Props = {
  maxTries: number;
  solution: string;
  guesses: string[];
  currentGuess: string;
  isRevealing?: boolean;
  currentRowClassName: string;
};

export const Grid = ({
  maxTries,
  solution,
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const empties =
    guesses.length < maxTries - 1
      ? Array.from(Array(maxTries - 1 - guesses.length))
      : [];
  return (
    <>
      <div className="grid container">
        {/* Used Row */}
        {guesses.map((guess, i) => (
          <UsedRow solution={solution} guess={guess} key={i} />
        ))}
        {/* Current Row */}
        <CurrentRow solution={solution} guess={currentGuess} />
        {/* Empty Rows */}
        {empties.map((_, i) => (
          <EmptyRow solution={solution} key={i} />
        ))}
        <div>
          Guesses:{guesses} | length:{guesses.length}{" "}
        </div>
        <div>Current Guess:{currentGuess}</div>
        <div>
          Answer: {solution} | {solution.length}
        </div>
        <div></div>
      </div>
    </>
  );
};
