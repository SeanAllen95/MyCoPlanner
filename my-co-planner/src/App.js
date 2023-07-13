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

    const [category, setCategory] = useState("Category");
    const [entry1, setEntry1] = useState("Entry 1");
    const [completed1, setCompleted1] = useState("In progress");
    const [entry2, setEntry2] = useState("Entry 2");
    const [completed2, setCompleted2] = useState("In progress");
    const [notes, setNotes] = useState("Notes");

    const handleEntry1Change = (ev) => setEntry1(ev.target.value);
    const handleEntry2Change = (ev) => setEntry2(ev.target.value);
    const handleNotesChange = (ev) => setNotes(ev.target.value);

    const handleSubmit = () => {
        const data = {category: category, entry1: entry1, completed1: completed1, entry2: entry2, completed2: completed2, notes: notes};
        
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
        <Route path="/NewProject" element={< MVPContainer handleEntry1Change = {handleEntry1Change} handleEntry2Change = {handleEntry2Change} entry1 = {entry1} entry2 = {entry2} handleSubmit={handleSubmit} allEntries = {allEntries} handleNotesChange = {handleNotesChange}/>} />
        <Route path="/TDD" element={< TDDPage />} />
        </Routes>
    </Router>
  );
}

export default App;


