import React from 'react';
import './App.css';
import Tags from './components/Tags';

function App() {
  return (
    <div className="App">
      <Tags variant="primary" />
      <Tags variant="secondary" />
      <Tags variant="tertiary" />
      <Tags variant="warning" />
      <Tags variant="default" />

      <div className="App">
        <Tags variant="primary" isRemovable />
        <Tags variant="secondary" isRemovable />
        <Tags variant="tertiary" isRemovable />
        <Tags variant="warning" isRemovable />
        <Tags variant="default" isRemovable />
      </div>
    </div>
  );
}

export default App;
