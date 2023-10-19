import { useState, useEffect } from "react";
import { Key } from "./key";
import { letterState } from "../gameLogics";
type Props = {
  onChar: (value: string) => void;
  onEnter: () => void;
  onDelete: () => void;
};
export const Keyboard = ({ onChar, onEnter, onDelete }: Props) => {
  const onClick = (value: string) => {
    if (value === "ENTER") {
      onEnter();
    } else if (value === "<--") {
      onDelete();
    } else {
      onChar(value);
    }
  };
  return (
    <div className="keyboard">
      <p>Keyboard</p>
      <div className="row">
        {"QWERTYUIOP".split("").map((letter) => (
          <Key value={letter} onClick={onClick} status={letterState(letter)} />
        ))}
      </div>
      <div className="row">
        {"ASDFGHJKL".split("").map((letter) => (
          <Key value={letter} onClick={onClick} status={letterState(letter)} />
        ))}
        <Key value="ENTER" onClick={onClick} status="default" />
      </div>
      <div className="row">
        {"ZXCVBNM".split("").map((letter) => (
          <Key value={letter} onClick={onClick} status={letterState(letter)} />
        ))}
        <Key value="<--" onClick={onClick} status="default" />
      </div>
    </div>
  );
};
