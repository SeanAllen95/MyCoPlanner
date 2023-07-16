import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import NavBar from './components/NavBar';
import AboutPage from './components/About'
import HomePage from './components/Home'
import NewProjectPage from './components/NewProjectForm'
import TDDPage from './components/TDDForm'
import MVPContainer from './containers/NewProjectContainer';
import EditProjectForm from './components/EditProjectForm';
import ProjectInfoContainer from './containers/NewProjectContainer';
import MyCollectionContainer from './containers/MyCollectionContainer';
import TDDContainer from './containers/TDDContainer';
import ProjectInformationContainer from './containers/ProjectInformationContainer';
import EditTDDForm from './components/EditTDDForm';


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

  // TDD Form States

  const [testName, setTestName] = useState("Test name goes here");
  const [testCode, setTestCode] = useState("Test code goes here");
  const [testStatus, setTestStatus] = useState("Test status goes here");

  // TDD State handlers

  const handleTestNameChange = (ev) => setTestName(ev.target.value);
  const handleTestCodeChange = (ev) => setTestCode(ev.target.value);
  const handleTestStatusChange = (ev) => setTestStatus(ev.target.value);

  // Get the id from the URL

  const url = window.location.href;
  const entryId = url.substring(url.lastIndexOf('/') + 1);


  // API request States
  const [allProjectInformation, setAllProjectInformation] = useState(null)
  const [allTDDInformation, setAllTDDInformation] = useState(null)

  //  API requests

  useEffect(() => {
    getProjectInformation();
  }, [])

  const getProjectInformation = function(){
          fetch('http://localhost:8080/api/NewProjectInformation')
          .then(response => response.json())
          .then(allProjectInformation => setAllProjectInformation(allProjectInformation),
      )
  }

  useEffect(() => {
    getTDDInformation();
  }, [])

  const getTDDInformation = function(){
        fetch('http://localhost:8080/api/TDDInformation')
        .then(response => response.json())
        .then(allTDDInformation => setAllTDDInformation(allTDDInformation),
    )
  }


  // Handle Project submissions

  const handleNewProjectSubmit = () => {
      const data = {projectName: projectName, projectDescription: projectDescription, projectAim1:  projectAim1, projectAim2: projectAim2, projectAim3: projectAim3, projectNotes: projectNotes};
      
      fetch('http://localhost:8080/api/NewProjectInformation', {
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

      const updatedData = {id: entryId, projectName: projectName, projectDescription: projectDescription, projectAim1:  projectAim1, projectAim2: projectAim2, projectAim3: projectAim3, projectNotes: projectNotes};


    // Send the updated data to the server
    
      fetch(`http://localhost:8080/api/NewProjectInformation/edit/${entryId}`, {
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

    const deleteTDDEntry = (entryId) => {
      fetch(`http://localhost:8080/api/TDD/delete/${entryId}`, {
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

  // Handle TDD submit

    const handleTDDSubmit = () => {
      const data = {testName: testName, testCode: testCode, testStatus: testStatus};
    
      fetch('http://localhost:8080/api/TDDInformation', {
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

    const handleEditTDDSubmit = e => {

      e.preventDefault();

      const updatedData = {id: entryId, testName: testName, testCode: testCode, testStatus: testStatus};


    // Send the updated data to the server
    
      fetch(`http://localhost:8080/api/TDDInformation/edit/${entryId}`, {
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
      


  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/NewProject" element={< ProjectInfoContainer NewProjectForm handleProjectNameChange = {handleProjectNameChange} handleDescriptionChange = {handleProjectDescriptionChange} allProjectInformation = {allProjectInformation} handleProjectAim1Change={handleProjectAim1Change} handleProjectAim2Change={handleProjectAim2Change} handleProjectAim3Change={handleProjectAim3Change} handleProjectNotesChange = {handleProjectNotesChange} handleNewProjectSubmit = {handleNewProjectSubmit} />} />
        <Route path="/MyCollection" element={< MyCollectionContainer />} />
        <Route path="/MyCollection/TDDInformation" element={< TDDContainer deleteTDDEntry={deleteTDDEntry} allTDDInformation={allTDDInformation} handleTestNameChange={handleTestNameChange} handleTestCodeChange={handleTestCodeChange} handleTestStatusChange={handleTestStatusChange} handleTDDSubmit={handleTDDSubmit} />} />
        <Route path="/MyCollection/TDDInformation/edit/:id" element={< EditTDDForm allTDDInformation={allTDDInformation} handleTestNameChange={handleTestNameChange} handleTestCodeChange={handleTestCodeChange} handleTestStatusChange={handleTestStatusChange} handleEditTDDSubmit={handleEditTDDSubmit} />} />
        {/* <Route path="/MyCollection/TDDInformation/delete/:id" element={< EditTDDForm deleteTDDEntry={deleteTDDEntry} allTDDInformation={allTDDInformation} handleTestNameChange={handleTestNameChange} handleTestCodeChange={handleTestCodeChange} handleTestStatusChange={handleTestStatusChange} handleEditTDDSubmit={handleEditTDDSubmit} />} /> */}
        <Route path= "/MyCollection/ProjectInformation" element={< ProjectInformationContainer allProjectInformation={allProjectInformation} />}/>
        <Route path= "/MyCollection/ProjectInformation/edit/:id" element={< EditProjectForm handleEditProjectSubmit={handleEditProjectSubmit} handleProjectNameChange = {handleProjectNameChange} handleDescriptionChange = {handleProjectDescriptionChange} allProjectInformation = {allProjectInformation} handleProjectAim1Change={handleProjectAim1Change} handleProjectAim2Change={handleProjectAim2Change} handleProjectAim3Change={handleProjectAim3Change} handleProjectNotesChange = {handleProjectNotesChange} handleNewProjectSubmit = {handleNewProjectSubmit} />}/>
        </Routes>
    </Router>
  );
}

export default App;


