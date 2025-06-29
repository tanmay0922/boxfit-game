import React, { useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import type { Shape } from '../type';

interface CellProps {
  x: number;
  y: number;
  onDrop: (x: number, y: number, shape: Shape) => void;
  filled?: boolean;
}

const Cell: React.FC<CellProps> = ({ x, y, onDrop, filled }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'shape',
    drop: (item: Shape) => {
      console.log('✅ Drop triggered at:', x, y, item);
      onDrop(x, y, item);
    },
  });

  useEffect(() => {
    if (ref.current) {
      drop(ref);
    }
  }, [drop]);

  return (
    <div
      ref={ref}
      style={{
        width: 30,
        height: 30,
        backgroundColor: filled ? '#3f51b5' : '#222',
        border: '1px solid #444',
      }}
    />
  );
};

export default Cell;
