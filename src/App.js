import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import data from './test.json';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content data={data}/>
    </div>
  );
}

export default App;
