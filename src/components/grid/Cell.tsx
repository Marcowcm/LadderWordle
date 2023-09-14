type CharStatus = "absent" | "present" | "correct";

type Props = {
  value?: string;
  status?: string;
  isRevealing?: boolean;
  isCompleted?: boolean;
  position?: number;
};
export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0
}: Props) => {
  const isFilled = value && !isCompleted;
  const shouldReveal = isRevealing && isCompleted;
  const className = "cell " + status;
  return (
    <div>
      <div className={className} id="{key}">
        {value}{" "}
      </div>
    </div>
  );
};
