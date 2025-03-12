"use client";
import React, { useState } from "react";

const Game = ({ rows = 5, cols = 5 }) => {
  const createBoard = () =>
    Array.from({ length: rows }, () => Array(cols).fill(false));

  const [board, setBoard] = useState(createBoard());
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const toggleBox = (row:number, col:number) => {
    if (isSolved) return;

    const newBoard = board.map((r, rIdx) =>
      r.map((cell, cIdx) => {
        if (
          rIdx === row && cIdx === col ||
          rIdx === row - 1 && cIdx === col ||
          rIdx === row + 1 && cIdx === col ||
          rIdx === row && cIdx === col - 1 ||
          rIdx === row && cIdx === col + 1
        ) {
          return !cell;
        }
        return cell;
      })
    );

    setBoard(newBoard);
    setMoves(moves + 1);

    // Check if all tiles are true
    if (newBoard.every(row => row.every(cell => cell))) {
      setIsSolved(true);
    }
  };

  return (
    <div className=" w-[90%] flex flex-col justify-center items-center h-[100%] gap-y-4.5 text-2xl">
      <h2>Tile Toggle Game</h2>
      <h2 className="text-yellow-300">Break Monad</h2>
      <p>Moves: {moves}</p>
      <div className="board mt-10">
        {board.map((row, rIdx) => (
          <div key={rIdx} className="row">
            {row.map((cell, cIdx) => (
              <div
                key={cIdx}
                className={`box ${cell ? "active" : ""}`}
                onClick={() => toggleBox(rIdx, cIdx)}
              />
            ))}
          </div>
        ))}
      </div>
      {isSolved && <p className="win-message">You solved it in {moves} moves! 🎉</p>}
    </div>
  );
};

export default Game;