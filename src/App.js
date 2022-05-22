import logo from './logo.svg';
import './App.css';
import './styles/board.css'
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board rows={10} columns={10}/>
    </div>
  );
}

export default App;
