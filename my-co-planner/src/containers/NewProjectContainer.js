import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



const ProjectInfoContainer = ({handleNewProjectSubmit, handleProjectNameChange, handleProjectDescriptionChange, handleProjectAim1Change, handleProjectAim2Change, handleProjectAim3Change, handleProjectNotesChange, allEntries }) =>{

return (
    <>
    <h1>Start a new project!</h1>
    <h3>What is the name of the project? This can be changed later</h3>
    <NewProjectForm handleProjectNameChange = {handleProjectNameChange} handleDescriptionChange = {handleProjectDescriptionChange} allEntries = {allEntries} handleProjectAim1Change={handleProjectAim1Change} handleProjectAim2Change={handleProjectAim2Change} handleProjectAim3Change={handleProjectAim3Change} handleProjectNotesChange = {handleProjectNotesChange} handleNewProjectSubmit = {handleNewProjectSubmit} />
   
  
  
    </>
)
}

export default ProjectInfoContainer;