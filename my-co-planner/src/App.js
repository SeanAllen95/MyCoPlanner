import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import PlanContainer from './containers/PlanContainer'


function App() {
  return (
    <div className="App">
    <h1 id='page-title'>MyCoPlanner</h1>
    <PlanContainer/>

    </div>
  );
}

export default App;


