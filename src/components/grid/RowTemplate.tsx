import { Cell } from "./Cell";

type Props = {
  guess: string;
};

export const Row = ({ guess }: Props) => {
  const Cells = Array.from(guess);
  return (
    <div className="mb-1 flex justify-center">
      {Cells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};
