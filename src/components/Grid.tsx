import React, { useState, useEffect } from 'react';
import Cell from './cell';
import type { Shape } from '../type';
import { socket } from '../socket';

const gridSize = 10;

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<number[][] | null>(null);
  const [score, setScore] = useState<number>(0); // 🎯 NEW

  useEffect(() => {
    socket.on('init', (serverGrid: number[][]) => {
      console.log('📥 Received grid from server:', serverGrid);
      setGrid(serverGrid);
    });

    socket.on('grid-updated', (updatedGrid: number[][]) => {
      setGrid(updatedGrid);
    });

    return () => {
      socket.off('init');
      socket.off('grid-updated');
    };
  }, []);

  const handleDrop = (x: number, y: number, shape: Shape) => {
    if (!grid) return;

    const newGrid = grid.map(row => [...row]);
    let filledCells = 0;

    const canPlace = shape.matrix.every((row, rowOffset) =>
      row.every((cell, colOffset) => {
        if (cell === 0) return true;
        const newX = x + colOffset;
        const newY = y + rowOffset;
        return (
          newX >= 0 &&
          newY >= 0 &&
          newX < gridSize &&
          newY < gridSize &&
          newGrid[newY][newX] === 0
        );
      })
    );

    if (!canPlace) return;

    // Place the shape and count how many cells were filled
    shape.matrix.forEach((row, rowOffset) => {
      row.forEach((cell, colOffset) => {
        if (cell === 1) {
          const newX = x + colOffset;
          const newY = y + rowOffset;
          newGrid[newY][newX] = 1;
          filledCells += 1;
        }
      });
    });

    setGrid(newGrid);
    socket.emit('update-grid', newGrid);

    // 💯 Add points: 10 points per cell filled
    setScore((prev) => prev + filledCells * 10);
  };

  if (!grid) return <div style={{ color: 'white' }}>Loading grid...</div>;

  return (
    <div>
      {/* 🧮 Score Display */}
      <h3 style={{ color: 'white', marginBottom: '10px' }}>Score: {score}</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 30px)`,
          gap: 2,
        }}
      >
        {grid.flatMap((row, y) =>
          row.map((value, x) => (
            <Cell
              key={`${x}-${y}`}
              x={x}
              y={y}
              filled={value === 1}
              onDrop={handleDrop}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Grid;
