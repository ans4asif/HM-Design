import React from 'react';
import './App.css';
import Tags from './components/Tags';

function App() {
  return (
    <div className="App">
      <h4>static Tags</h4>
      <Tags variant="primary-light" />
      <Tags variant="secondary-light" />
      <Tags variant="tertiary-light" />
      <Tags variant="warning-light" />
      <Tags variant="default-light" />

      <div className="App">
        <Tags variant="primary" />
        <Tags variant="secondary" />
        <Tags variant="tertiary" />
        <Tags variant="warning" />
        <Tags variant="default" />
      </div>
      <div className="App">
        <Tags variant="primary" disabled />
        <Tags variant="secondary" disabled />
        <Tags variant="tertiary" disabled />
        <Tags variant="warning" disabled />
        <Tags variant="default" disabled />
      </div>

      <h4>removable Tags</h4>
      <Tags variant="primary-light" isRemovable />
      <Tags variant="secondary-light" isRemovable />
      <Tags variant="tertiary-light" isRemovable />
      <Tags variant="warning-light" isRemovable />
      <Tags variant="default-light" isRemovable />

      <div className="App">
        <Tags variant="primary" isRemovable />
        <Tags variant="secondary" isRemovable />
        <Tags variant="tertiary" isRemovable />
        <Tags variant="warning" isRemovable />
        <Tags variant="default" isRemovable />
      </div>
      <div className="App">
        <Tags variant="primary" isRemovable disabled />
        <Tags variant="secondary" isRemovable disabled />
        <Tags variant="tertiary" isRemovable disabled />
        <Tags variant="warning" isRemovable disabled />
        <Tags variant="default" isRemovable disabled />
      </div>
    </div>
  );
}

export default App;
