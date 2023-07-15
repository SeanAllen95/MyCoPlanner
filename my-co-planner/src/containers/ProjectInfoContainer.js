import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



const ProjectInfoContainer = ({handleNewProjectSubmit, handleProjectNameChange, handleProjectDescriptionChange, handleProjectAim1Change, handleProjectAim2Change, handleProjectAim3Change, handleProjectNotesChange, allEntries }) =>{

    
    const NewProjectInformation = allEntries?.map((entry) => {
        return (
          <li key={entry.id}>{entry.projectName} {entry.projectDescription} {entry.projectAim1} {entry.projectAim2} {entry.projectAim3} {entry.projectNotes}</li>
        );
      });




return (
    <>
    <h1>Start a new project!</h1>
    <h3>What is the name of the project? This can be changed later</h3>
    <NewProjectForm handleProjectNameChange = {handleProjectNameChange} handleDescriptionChange = {handleProjectDescriptionChange} allEntries = {allEntries} handleProjectAim1Change={handleProjectAim1Change} handleProjectAim2Change={handleProjectAim2Change} handleProjectAim3Change={handleProjectAim3Change} handleProjectNotesChange = {handleProjectNotesChange} handleNewProjectSubmit = {handleNewProjectSubmit} />
    <h3>Project Info</h3>
    <h4>{NewProjectInformation}</h4>
  
    </>
)
}

export default ProjectInfoContainer;