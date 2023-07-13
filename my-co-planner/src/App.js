import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import PlanContainer from './containers/PlanContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import AboutPage from './components/About'
import HomePage from './components/Home'
import NewProjectPage from './components/NewProjectForm'
import TDDPage from './components/TDDPage'
import MVPContainer from './containers/MVPContainer';


function App() {

  const [allEntries, setAllEntries] = useState(null)

    const [MvpProjectAim, setMvpProjectAim] = useState("Entry Here");
    const [userEntry2, setUserEntry2] = useState("Entry 2 Here");

    const handleMvpProjectAimChange = (ev) => setMvpProjectAim(ev.target.value);
    const handleEntry2Change = (ev) => setUserEntry2(ev.target.value);

    const handleSubmit = () => {
        const data = {entry: MvpProjectAim, completed: userEntry2};
        
        fetch('http://localhost:8080/entries', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
            if (response.ok) {
                console.log('Data submitted successfully');
            } else {
                console.error('Failed to submit data:', response.status);
            }
            })
            .catch(error => {
            console.error('An error occurred:', error);
            });
        };

       
        useEffect(() => {
            getAllEntries();
          }, [])
    
        const getAllEntries = function(){
                fetch('http://localhost:8080/entries')
                .then(response => response.json())
                .then(allEntries => setAllEntries(allEntries),
                console.log(allEntries)
            )
        }


  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/NewProject" element={< MVPContainer handleMvpProjectAimChange = {handleMvpProjectAimChange} handleEntry2Change = {handleEntry2Change} MvpProjectAim = {MvpProjectAim} userEntry2 = {userEntry2} handleSubmit={handleSubmit} allEntries = {allEntries}/>} />
        <Route path="/TDD" element={< TDDPage />} />
        </Routes>
    </Router>
  );
}

export default App;


