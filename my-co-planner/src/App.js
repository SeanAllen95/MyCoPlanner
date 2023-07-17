import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import NavBar from './components/NavBar';
import AboutPage from './components/About'
import HomePage from './components/Home'
import NewProjectPage from './components/ProjectForm'
import TDDPage from './components/TDDForm'
import MVPContainer from './containers/NewProjectContainer';
import EditProjectForm from './components/EditProjectForm';
import ProjectInfoContainer from './containers/NewProjectContainer';
import MyCollectionContainer from './containers/MyCollectionContainer';
import TDDContainer from './containers/TDDContainer';
import ProjectInformationContainer from './containers/ProjectInformationContainer';
import EditTDDForm from './components/EditTDDForm';


function App() {

  // Get the id from the URL

  const url = window.location.href;
  const entryId = url.substring(url.lastIndexOf('/') + 1);

  // Get the current page

  const purl = window.location.href;
  const currentPage = purl.substring(url.lastIndexOf('/') + 1);

  // Project Form States
  const [category, setCategory] = useState(currentPage);
  const [entry1, setEntry1] = useState("Entry 1 goes here");
  const [entry2, setEntry2] = useState("Entry 2 goes here");
  const [entry3, setEntry3] = useState("Entry 3 goes here");
  const [entry4, setEntry4] = useState("Entry 4 goes here");
  const [entry5, setEntry5] = useState("Entry 5 goes here");
  const [entry6, setEntry6] = useState("Entry 6 goes here");
  const [entry7, setEntry7] = useState("Entry 7 goes here");
  const [entry8, setEntry8] = useState("Entry 8 goes here");
  const [entryNotes, setEntryNotes] = useState("Project notes go here");

  // New Project State handlers

  const handleCategoryChange = (ev) => setCategory(ev.target.value);
  const handleEntry1Change = (ev) => setEntry1(ev.target.value);
  const handleEntry2Change = (ev) => setEntry2(ev.target.value);
  const handleEntry3Change = (ev) => setEntry3(ev.target.value);
  const handleEntry4Change = (ev) => setEntry4(ev.target.value);
  const handleEntry5Change = (ev) => setEntry5(ev.target.value);
  const handleEntry6Change = (ev) => setEntry6(ev.target.value);
  const handleEntry7Change = (ev) => setEntry7(ev.target.value);
  const handleEntry8Change = (ev) => setEntry8(ev.target.value);
  const handleEntryNotesChange = (ev) => setEntryNotes(ev.target.value);

  // TDD Form States

  const [testName, setTestName] = useState("Test name goes here");
  const [testCode, setTestCode] = useState("Test code goes here");
  const [testStatus, setTestStatus] = useState("Test status goes here");

  // TDD State handlers

  const handleTestNameChange = (ev) => setTestName(ev.target.value);
  const handleTestCodeChange = (ev) => setTestCode(ev.target.value);
  const handleTestStatusChange = (ev) => setTestStatus(ev.target.value);

  

  // API request States
  const [allProjectInformation, setAllProjectInformation] = useState(null)

  //  API requests

  useEffect(() => {
    getProjectInformation();
  }, [])

  const getProjectInformation = function(){
          fetch('http://localhost:8080/api/ProjectInformation')
          .then(response => response.json())
          .then(allProjectInformation => setAllProjectInformation(allProjectInformation),
      )
  }


  // Handle Project submissions

  const handleProjectSubmit = () => {
      const data = {category: category, entry1: entry1, entry2: entry2, entry3:  entry3, entry4: entry4, entry5: entry5, entry6: entry6, entry7: entry7, entry8: entry8, entryNotes: entryNotes};
      
      fetch('http://localhost:8080/api/ProjectInformation', {
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

    const handleEditProjectSubmit = e => {

      e.preventDefault();

      const updatedData = {category: category, entry1: entry1, entry2: entry2, entry3:  entry3, entry4: entry4, entry5: entry5, entry6: entry6, entry7: entry7, entry8: entry8, entryNotes: entryNotes};


    // Send the updated data to the server
    
      fetch(`http://localhost:8080/api/ProjectInformation/edit/${entryId}`, {
        method: 'PUT',
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
          console.log('Error updating data:', error,);
        });
      };

    const deleteProjectEntry = (currentPage) => {
      fetch(`http://localhost:8080/api/ProjectInformation/delete/${currentPage}`, {
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
      


  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/NewProject" element={< ProjectInfoContainer NewProjectForm currentPage={currentPage} handleEntry1Change = {handleEntry1Change} handleEntry2Change = {handleEntry2Change} allProjectInformation = {allProjectInformation} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit} />} />
        <Route path="/MyCollection" element={< MyCollectionContainer />} />
        <Route path="/MyCollection/TDDInformation" element={< TDDContainer deleteProjectEntry={deleteProjectEntry} currentPage={currentPage} handleEntry1Change = {handleEntry1Change} handleEntry2Change = {handleEntry2Change} allProjectInformation = {allProjectInformation} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>} />
        <Route path="/MyCollection/TDDInformation/edit/:id" element={< EditTDDForm deleteProjectEntry={deleteProjectEntry} handleTestNameChange={handleTestNameChange} handleTestCodeChange={handleTestCodeChange} handleTestStatusChange={handleTestStatusChange}  />} />
        {/* <Route path="/MyCollection/TDDInformation/delete/:id" element={< EditTDDForm deleteTDDEntry={deleteTDDEntry} allTDDInformation={allTDDInformation} handleTestNameChange={handleTestNameChange} handleTestCodeChange={handleTestCodeChange} handleTestStatusChange={handleTestStatusChange} handleEditTDDSubmit={handleEditTDDSubmit} />} /> */}
        <Route path= "/MyCollection/ProjectInformation" element={< ProjectInformationContainer allProjectInformation={allProjectInformation} />}/>
        <Route path= "/MyCollection/ProjectInformation/edit/:id" element={< EditProjectForm allProjectInformation = {allProjectInformation} currentPage={currentPage} handleEntry1Change = {handleEntry1Change} handleEntry2Change = {handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleEditProjectSubmit = {handleEditProjectSubmit} />}/>
        </Routes>
    </Router>
  );
}

export default App;


