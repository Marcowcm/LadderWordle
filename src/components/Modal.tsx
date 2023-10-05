interface Props {
  isOpen: boolean;
  message: string;
  onClick: () => void;
}

export const Modal = ({ isOpen, message, onClick }: Props) => {
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
          <button className="modal-action" onClick={onClick}>
            Start New Game
          </button>
        </div>
      </div>
    </>
  );
};
