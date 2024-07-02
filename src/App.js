import React from 'react';
import './App.css';
import ListaDeTarefas from './ListaDeTarefas';

function App() {
  const tarefas = [
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Construir um projeto simples' },
    { id: 3, text: 'Entender Props e State' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ListaDeTarefas tarefas={tarefas} />
      </header>
    </div>
  );
}

export default App;
