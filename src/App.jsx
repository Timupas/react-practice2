import './App.css'
import Board from './components/Board/Board';
import Title from './components/Title/Title';
import List from './components/List/List';
import upcoming from './upcoming-events.json';

function App() {
  return (
    <Board>
      <Title text="24th Core Worlds Coalition Conference"/>
      <List events={upcoming}/>
    </Board>
  )
}

export default App
