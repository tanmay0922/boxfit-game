import React from 'react';

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <div>
      <h2>Score: {score}</h2>
      <div style={{ marginTop: '1rem' }}>
        <h3>Players</h3>
        <p><span style={{ color: 'blue' }}>●</span> Alice</p>
        <p><span style={{ color: 'magenta' }}>●</span> Bob</p>
      </div>
    </div>
  );
};

export default Scoreboard;
