import { words } from "./words";

export const getStatus = (solution, guess) => {
  const ref = Array.from(solution.split(""));
  const status = Array.from(guess.split(""));
  guess.split("").map((letter, i) => {
    if (solution[i] === letter) {
      status[i] = "correct";
      ref[i] = "-1";
    } else if (!solution.includes(letter)) {
      status[i] = "absent";
    }
  });

  guess.split("").map((letter, i) => {
    if (status[i] === "correct" || status[i] === "absent") {
    } else if (solution.includes(letter)) {
      // just in case
      if (ref.includes(letter)) {
        ref[ref.indexOf(letter)] = "-1";
        status[i] = "present";
      } else {
        status[i] = "absent";
      }
    }
  });

  return status;
};

export const letterState = [];

export const getNewWord = (level: number) => {
  const dict = words[level - 1];
  return dict[Math.floor(Math.random() * dict.length)].toUpperCase();
};
