import React, { useState } from 'react';
import Cell from './cell';
import type { Shape } from '../type';

const gridSize = 10;

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>(
    Array.from({ length: gridSize }, () => Array(gridSize).fill(0))
  );

  const handleDrop = (x: number, y: number, shape: Shape) => {
    console.log('🚀 handleDrop called at:', x, y, 'Shape:', shape);

    const newGrid = grid.map(row => [...row]);

    shape.matrix.forEach((row, rowOffset) => {
      row.forEach((cell, colOffset) => {
        if (cell === 1) {
          const newX = x + colOffset;
          const newY = y + rowOffset;
          if (newX < gridSize && newY < gridSize) {
            newGrid[newY][newX] = 1;
          }
        }
      });
    });

    setGrid(newGrid);
  };

  return (
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
  );
};

export default Grid;
