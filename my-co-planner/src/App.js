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
    const [entry, setEntry] = useState(new Map());
    const [notes, setNotes] = useState("Notes");

    const handleEntryChange = (ev) => setEntry(ev.target.value);
    const handleNotesChange = (ev) => setNotes(ev.target.value);

    const handleSubmit = () => {
        const data = {category: category, entry: entry, notes: notes};
        
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

        const handleAddField = () => {
          setEntry([...entry, { value: '' }]);
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

        const handleChange = event => {
          const { name, value } = event.target;
          setEntry(prevState => {
            const updatedFormData = new Map(prevState);
            updatedFormData.set(name, value);
            return updatedFormData;
          });
        };


  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/NewProject" element={< MVPContainer handleEntryChange = {handleEntryChange} handleSubmit={handleSubmit} allEntries = {allEntries} handleNotesChange = {handleNotesChange} handleAddField={handleAddField} handleChange={handleChange}/>} />
        <Route path="/TDD" element={< TDDPage />} />
        </Routes>
    </Router>
  );
}

export default App;


