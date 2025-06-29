import React, { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import type { Shape } from '../type';

const shape: Shape = {
  id: 'shape-1',
  color: 'yellow',
  matrix: [
    [1, 1],
    [1, 0],
    [1, 0],
  ],
};

const NextItem: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drag] = useDrag(() => ({
    type: 'shape', // MUST MATCH useDrop accept
    item: shape,
  }));

  useEffect(() => {
    if (ref.current) {
      drag(ref);
    }
  }, [drag]);

  return (
    <div>
      <h3 style={{ marginBottom: '10px' }}>Next Item</h3>
      <div ref={ref} style={{ display: 'inline-block', cursor: 'grab' }}>
        {shape.matrix.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: cell ? shape.color : 'transparent',
                  border: cell ? '1px solid #000' : '',
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextItem;
