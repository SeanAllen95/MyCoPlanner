import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import PlanContainer from './containers/PlanContainer'
import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import NavBar from './components/NavBar';
import AboutPage from './components/About'
import HomePage from './components/Home'
import NewProjectPage from './components/NewProjectForm'
import TDDPage from './components/TDDPage'
import MVPContainer from './containers/MVPContainer';
import EditForm from './components/EditProjectForm';


function App() {

    const [allEntries, setAllEntries] = useState(null)
    const [category, setCategory] = useState("Category");
    const [entry, setEntry] = useState("Entry");
    const [complete, setComplete] = useState("Inomplete");
    const [notes, setNotes] = useState("Notes");

    const handleCategoryChange = (ev) => setCategory(ev.target.value);
    const handleEntryChange = (ev) => setEntry(ev.target.value);
    const handleCompleteChange = (ev) => setComplete(ev.target.value);
    const handleNotesChange = (ev) => setNotes(ev.target.value);

    // const {entryId} = useParams()
    const url = window.location.href;
    const entryId = url.substring(url.lastIndexOf('/') + 1);
    console.log('Entry ID:', entryId);


    const handleSubmit = () => {
        const data = {category: category, entry: entry, complete: complete, notes: notes};
        
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
            });};


    const handleUpdateSubmit = e => {
    e.preventDefault();

    // Prepare the updated data
    const updatedData = {
      entryId,
      category,
      entry,
      complete,
      notes
    };

    // Send the updated data to the server
    
    fetch(`http://localhost:8080/entries/edit/${entryId}`, {
      method: 'PUT', // or 'PATCH' depending on your API
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle success or update UI
        console.log('Updated data:', data);
      })
      .catch(error => {
        // Handle error or update UI
        console.log('Error updating data:', error);
      });
   
  };
  // Delete a form
  const deleteEntry = (entryId) => {
    fetch(`http://localhost:8080/entries/delete/${entryId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Handle success or update UI
          console.log('Entry deleted successfully');
        } else {
          // Handle error or update UI
          console.log('Failed to delete entry');
        }
      })
      .catch(error => {
        // Handle error or update UI
        console.log('Error deleting entry:', error);
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
        <Route path="/NewProject" element={< MVPContainer deleteEntry = {deleteEntry} handleEntryChange = {handleEntryChange} handleCategoryChange = {handleCategoryChange} handleSubmit={handleSubmit} allEntries = {allEntries} handleNotesChange = {handleNotesChange} handleCompleteChange={handleCompleteChange} />} />
        <Route path="/TDD" element={< TDDPage />} />
        <Route path="/edit/:id" element={< EditForm entryId={entryId} handleUpdateSubmit = {handleUpdateSubmit} handleEntryChange = {handleEntryChange} handleCategoryChange = {handleCategoryChange} handleSubmit={handleSubmit} allEntries = {allEntries} handleNotesChange = {handleNotesChange} handleCompleteChange={handleCompleteChange}/>} />
        </Routes>
    </Router>
  );
}

export default App;


