import React from 'react';
import './App.css';
import { TodoList } from './TodoList';

function App() {
  const task1 = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: false },
    { id: 3, title: 'React', isDone: true },
  ];

  const task2 = [
    { id: 1, title: 'Vodka', isDone: true },
    { id: 2, title: 'Visky', isDone: true },
    { id: 3, title: 'Coca-Cola', isDone: false },
  ];

  return (
    <div className="App">
      <TodoList title={'What to learn'} task={task1} />
      <TodoList title={'What to drink'} task={task2} />
    </div>
  );
}

export default App;
