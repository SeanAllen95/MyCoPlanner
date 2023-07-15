import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import PlanContainer from './containers/PlanContainer'
import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import NavBar from './components/NavBar';
import AboutPage from './components/About'
import HomePage from './components/Home'
import NewProjectPage from './components/NewProjectForm'
import TDDPage from './components/TDDForm'
import MVPContainer from './containers/ProjectInfoContainer';
import EditForm from './components/EditProjectForm';
import ProjectInfoContainer from './containers/ProjectInfoContainer';
import MyCollectionContainer from './containers/MyCollectionContainer';
import TDDContainer from './containers/TDDContainer';


function App() {

  // New Project Form States
  const [projectName, setProjectName] = useState("Project name goes here");
  const [projectDescription, setProjectDescription] = useState("Project description goes here");
  const [projectAim1, setProjectAim1] = useState("Project aim 1 goes here");
  const [projectAim2, setProjectAim2] = useState("Project aim 2 goes here");
  const [projectAim3, setProjectAim3] = useState("Project aim 3 goes here");
  const [projectNotes, setProjectNotes] = useState("Project notes go here");

  // New Project State handlers

  const handleProjectNameChange = (ev) => setProjectName(ev.target.value);
  const handleProjectDescriptionChange = (ev) => setProjectDescription(ev.target.value);
  const handleProjectAim1Change = (ev) => setProjectAim1(ev.target.value);
  const handleProjectAim2Change = (ev) => setProjectAim2(ev.target.value);
  const handleProjectAim3Change = (ev) => setProjectAim3(ev.target.value);
  const handleProjectNotesChange = (ev) => setProjectNotes(ev.target.value);




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

  // const url = window.location.href;
  // const entryId = url.substring(url.lastIndexOf('/') + 1);
  // console.log('Entry ID:', entryId);


  const handleNewProjectSubmit = () => {
      const data = {projectName: projectName, projectDescription: projectDescription, projectAim1:  projectAim1, projectAim2: projectAim2, projectAim3: projectAim3, projectNotes: projectNotes};
      
      fetch('http://localhost:8080/NewProjectInformation', {
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


    // const handleUpdateSubmit = e => {
    // e.preventDefault();

    // Prepare the updated data

    // const updatedData = {
    //   entryId,
    //   category,
    //   entry,
    //   complete,
    //   notes
    // }};

    // Send the updated data to the server
    
  //   fetch(`http://localhost:8080/entries/edit/${entryId}`, {
  //     method: 'PUT', // or 'PATCH' depending on your API
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedData)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle success or update UI
  //       console.log('Updated data:', data);
  //     })
  //     .catch(error => {
  //       // Handle error or update UI
  //       console.log('Error updating data:', error);
  //     });
   
  // };

  // Delete a form

  // const deleteEntry = (entryId) => {
  //   fetch(`http://localhost:8080/entries/delete/${entryId}`, {
  //     method: 'DELETE'
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         // Handle success or update UI
  //         console.log('Entry deleted successfully');
  //       } else {
  //         // Handle error or update UI
  //         console.log('Failed to delete entry');
  //       }
  //     })
  //     .catch(error => {
  //       // Handle error or update UI
  //       console.log('Error deleting entry:', error);
  //     });
  // };
  
       
        useEffect(() => {
            getAllEntries();
          }, [])
    
        const getAllEntries = function(){
                fetch('http://localhost:8080/NewProjectInformation')
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
        <Route path="/NewProject" element={< ProjectInfoContainer NewProjectForm handleProjectNameChange = {handleProjectNameChange} handleDescriptionChange = {handleProjectDescriptionChange} allEntries = {allEntries} handleProjectAim1Change={handleProjectAim1Change} handleProjectAim2Change={handleProjectAim2Change} handleProjectAim3Change={handleProjectAim3Change} handleProjectNotesChange = {handleProjectNotesChange} handleNewProjectSubmit = {handleNewProjectSubmit} />} />
        {/* <Route path="/edit/:id" element={< EditForm  handleEntryChange = {handleEntryChange} handleCategoryChange = {handleCategoryChange}  allEntries = {allEntries} handleNotesChange = {handleNotesChange} handleCompleteChange={handleCompleteChange}/>} /> */}
        <Route path="/MyCollection" element={< MyCollectionContainer />} />
        <Route path="/MyCollection/TDD" element={< TDDContainer />} />
        </Routes>
    </Router>
  );
}

export default App;


