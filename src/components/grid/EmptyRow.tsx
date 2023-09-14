import { Cell } from "./Cell";

type Props = {
  solution: string;
};

export const EmptyRow = ({ solution }: Props) => {
  const emptyCells = Array.from(Array(solution.length));
  return (
    <div className="row mb-1 justify-center">
      {emptyCells.map((_, i) => (
        <Cell value="" key={i} />
      ))}
    </div>
  );
};
