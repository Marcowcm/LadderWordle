import "./styles.css";
import { useState, useEffect, useCallback } from "react";
import { Grid } from "./components/grid/Grid";
import { getNewWord } from "./components/gameLogics";
import { Keyboard } from "./components/keyboard/Keyboard";
import { Modal } from "./components/Modal";

export default function App() {
  const [level, setLevel] = useState(1);

  const [solution, setSolution] = useState(getNewWord(level));

  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isRevealing, setIsRevealing] = useState(false);
  const [currentRowClass, setCurrentRowClass] = useState("false");
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const modalMessage = "Lorem";

  const onChar = useCallback(
    (value: string) => {
      if (
        solution.length > currentGuess.length &&
        guesses.length < solution.length
      ) {
        setCurrentGuess(`${currentGuess}${value}`);
      }
    },
    [guesses, currentGuess, solution],
  );
  const onDelete = useCallback(() => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.substring(0, currentGuess.length - 1));
    }
  }, [currentGuess]);
  const onEnter = useCallback(() => {
    if (isWon || isLost) {
      return;
    }
    if (currentGuess.length === solution.length) {
      /* guess is complete
       if(WordList.include(currentGuess)){ //guess is an accepted word */
      if (currentGuess === solution) {
        /* win */
        setIsWon(true);
        setIsRevealing(true);
        /* animation */
        nextLevel();
      } else if (guesses.length < solution.length) {
        /* WRONG, next guess */
        setGuesses(guesses.concat(currentGuess));
        setCurrentGuess("");
      } else {
        /* wrong on Last chance */
        setIsLost(true);
      }
    }
  }, [guesses, currentGuess, isLost, isWon, solution]);

  const newGame = useCallback(() => {
    setLevel(1);
    setSolution(getNewWord(1));
    setGuesses([]);
    setCurrentGuess("");
    setCurrentRowClass("false");
    setIsWon(false);
    setIsLost(false);
  }, []);
  const nextLevel = useCallback(() => {
    setSolution(getNewWord(level + 1));
    setLevel(level + 1);
    setGuesses([]);
    setCurrentGuess("");
    setCurrentRowClass("false");
    setIsWon(false);
    setIsLost(false);
  }, [level, solution]);
  /* keyListener */
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onEnter();
      } else if (e.key === "Backspace") {
        onDelete();
      } else {
        const k = e.key.toUpperCase();
        if (k.length === 1 && k >= "A" && k <= "Z") {
          onChar(k);
        }
      }
    };
    window.addEventListener("keyup", listener);
  }, [onChar, onDelete, onEnter]);

  /* onKeyPress KeyId keyValue */
  return (
    <div className="App">
      <h1>Wordle</h1>
      <Grid
        maxTries={solution.length}
        solution={solution}
        guesses={guesses}
        currentGuess={currentGuess}
        isRevealing={isRevealing}
        currentRowClassName={currentRowClass}
      />
      <Keyboard onChar={onChar} onEnter={onEnter} onDelete={onDelete} />
      <button onClick={newGame}>Reset</button>
      <button onClick={nextLevel}>Next Level</button>
      <p>Level: {level}</p>
      <Modal isOpen={isWon} message={modalMessage} onClick={newGame} />
    </div>
  );
}
