import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Grid from './components/Grid';
import Scoreboard from './components/Scoreboard';
import NextItem from './components/NextItem';
import './App.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div>
          <Grid />
        </div>
        <div className="sidebar">
          <Scoreboard score={150} />
          <NextItem />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
