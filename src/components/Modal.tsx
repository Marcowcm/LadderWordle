interface Props {
  isOpen: boolean;
  info: { guesses; solution };
  Action: () => void;
}

export const LostModal = ({ isOpen, info, Action }: Props) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal container">
        {/* Content */}
        <div className="modal-content">
          <h2 className="lost-msg">You have Lost!</h2>
          <p className="lost-msg">The answer was {info.solution.length}</p>
          <p className="lost-msg">Try better next time.</p>
          {/* Actions */}
          <button className="modal-action" onClick={Action}>
            Start New Game
          </button>
        </div>
      </div>
    </>
  );
};

export const WinModal = ({ isOpen, message, Action }: Props) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="modal container">
        {/* Content */}
        <div className="modal-content">
          <p className="win-msg">{message}</p>
          {/* Actions */}
          <button className="modal-action" onClick={Action}>
            Next Level
          </button>
        </div>
      </div>
    </>
  );
};
